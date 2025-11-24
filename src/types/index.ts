// API Response Types
export interface ApiPlayer {
  rank: number;
  medal: "gold" | "silver" | "bronze" | null;
  username: string;
  phone_display: string;
  points: number;
  accuracy: number;
}

export interface LeaderboardResponse {
  status: boolean;
  period: "monthly" | "all";
  top_3: ApiPlayer[];
  leaderboard: ApiPlayer[];
  stats: {
    total_players: number;
    active_players: number;
    period: string;
  };
}

// Component Types (mapped from API)
export interface Player {
  rank: number;
  username: string;
  phoneNumber: string;
  points: number;
  streak: string;
}

export type LeaderboardTab = "monthly" | "alltime";
