import { LeaderboardResponse, ApiPlayer, Player } from "../types";
import { mockLeaderboardResponse } from "../data/mockData";

// Get base URL from environment variable
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!BASE_URL) {
  throw new Error(
    "VITE_API_BASE_URL is not defined. Please set it in your .env file."
  );
}

/**
 * Maps API player data to component player format
 */
function mapApiPlayerToPlayer(apiPlayer: ApiPlayer): Player {
  // Convert medal to streak emoji
  const streakMap: Record<string, string> = {
    gold: "🥇",
    silver: "🥈",
    bronze: "🥉",
  };

  const streak = apiPlayer.medal ? streakMap[apiPlayer.medal] || "🔥" : "🔥";

  return {
    rank: apiPlayer.rank,
    username: apiPlayer.username,
    phoneNumber: apiPlayer.phone_display,
    points: apiPlayer.points,
    streak,
  };
}

export interface FetchLeaderboardParams {
  period?: "monthly" | "all";
  search?: string;
  limit?: number;
}

/**
 * Applies filters to mock data (used as fallback for CORS errors)
 */
function applyFiltersToMockData(
  data: LeaderboardResponse,
  params: FetchLeaderboardParams
): LeaderboardResponse {
  let filteredData = { ...data };

  // Apply search filter if provided
  if (params.search) {
    const searchLower = params.search.toLowerCase();
    const filterPlayer = (player: ApiPlayer) =>
      player.username.toLowerCase().includes(searchLower) ||
      player.phone_display.includes(searchLower);

    filteredData.top_3 = data.top_3.filter(filterPlayer);
    filteredData.leaderboard = data.leaderboard.filter(filterPlayer);
  }

  // Apply limit if provided
  if (params.limit) {
    filteredData.leaderboard = filteredData.leaderboard.slice(0, params.limit);
  }

  // Update period if different
  if (params.period) {
    filteredData.period = params.period;
  }

  return filteredData;
}

/**
 * Fetches leaderboard data from the API
 */
export async function fetchLeaderboard(
  params: FetchLeaderboardParams = {}
): Promise<LeaderboardResponse> {
  const { period = "all", search, limit = 50 } = params;

  const queryParams = new URLSearchParams({
    period: period === "monthly" ? "monthly" : "all",
    limit: limit.toString(),
  });

  if (search) {
    queryParams.append("search", search);
  }

  // Construct URL - BASE_URL is the full endpoint URL
  // Ensure it ends with / and append query params
  const baseUrl = BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}`;
  const url = `${baseUrl}?${queryParams.toString()}`;

  console.log("=== API Request Debug ===");
  console.log("BASE_URL from env:", BASE_URL);
  console.log("Constructed URL:", url);
  console.log("Query params:", queryParams.toString());

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      referrerPolicy: "no-referrer",
      mode: "cors",
      credentials: "omit",
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }

    const data: LeaderboardResponse = await response.json();

    if (!data.status) {
      throw new Error("API returned an error status");
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      console.warn(
        "⚠️ API request failed (likely CORS issue). Using mock data as fallback.",
        url
      );
      // Return mock data as fallback when CORS error occurs
      return applyFiltersToMockData(mockLeaderboardResponse, params);
    }
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
}

/**
 * Fetches and maps leaderboard data to component format
 */
export async function getLeaderboardData(
  params: FetchLeaderboardParams = {}
): Promise<{ topThree: Player[]; remainingPlayers: Player[] }> {
  const response = await fetchLeaderboard(params);

  // Map top 3 players
  const topThree = response.top_3.map(mapApiPlayerToPlayer);

  // Map remaining leaderboard players (excluding top 3 to avoid duplicates)
  // Get the ranks of top 3 players
  const topThreeRanks = new Set(response.top_3.map((player) => player.rank));

  // Filter out top 3 from leaderboard array
  const remainingLeaderboard = response.leaderboard.filter(
    (player) => !topThreeRanks.has(player.rank)
  );

  const remainingPlayers = remainingLeaderboard.map(mapApiPlayerToPlayer);

  return {
    topThree,
    remainingPlayers,
  };
}

