// Shared type definitions
export interface Player {
  rank: number;
  username: string;
  phoneNumber: string;
  points: number;
  streak: string;
}

export type LeaderboardTab = "monthly" | "alltime";

