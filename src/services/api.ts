import { LeaderboardResponse, ApiPlayer, Player } from "../types";

// Get base URL from environment variable, with fallback for development
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL

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

  const url = `${BASE_URL}/api/ai-game/leaderboard/?${queryParams.toString()}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: LeaderboardResponse = await response.json();

    if (!data.status) {
      throw new Error("API returned an error status");
    }

    return data;
  } catch (error) {
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

  // Map remaining leaderboard players
  const remainingPlayers = response.leaderboard.map(mapApiPlayerToPlayer);

  return {
    topThree,
    remainingPlayers,
  };
}

