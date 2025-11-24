import { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { LeaderboardTabs } from "./components/LeaderboardTabs";
import { TopThreeCards } from "./components/TopThreeCards";
import { SearchBar } from "./components/SearchBar";
import { LeaderboardTable } from "./components/LeaderboardTable";
import { Footer } from "./components/Footer";
import { getLeaderboardData } from "./services/api";
import { Player, LeaderboardTab } from "./types";

export default function App() {
  const [activeTab, setActiveTab] = useState<LeaderboardTab>("monthly");
  const [searchQuery, setSearchQuery] = useState("");
  const [topThree, setTopThree] = useState<Player[]>([]);
  const [remainingPlayers, setRemainingPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data when tab or search changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const period = activeTab === "monthly" ? "monthly" : "all";
        const { topThree: top, remainingPlayers: remaining } =
          await getLeaderboardData({
            period,
            search: searchQuery || undefined,
            limit: 50,
          });

        setTopThree(top);
        setRemainingPlayers(remaining);
      } catch (err) {
        console.error("Failed to fetch leaderboard:", err);
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load leaderboard data. Please try again later."
        );
        // Set empty arrays on error
        setTopThree([]);
        setRemainingPlayers([]);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search to avoid too many API calls
    const timeoutId = setTimeout(() => {
      fetchData();
    }, searchQuery ? 500 : 0);

    return () => clearTimeout(timeoutId);
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="max-w-[1536px] mx-auto px-[16px] md:px-[24px] py-[24px] md:py-[32px]">
        {/* Hero Section */}
        <Hero />

        {/* Leaderboard Section */}
        <LeaderboardTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <p className="text-[#848a90] text-[14px]">Loading leaderboard...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-[16px] p-4 mb-8">
            <p className="text-red-800 text-[14px]">{error}</p>
          </div>
        )}

        {/* Top 3 Players */}
        {!loading && !error && topThree.length > 0 && (
          <div className="mb-8">
            <TopThreeCards players={topThree} />
          </div>
        )}

        {/* Search Bar */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Leaderboard Table */}
        {!loading && !error && (
          <div className="mt-4">
            {remainingPlayers.length > 0 ? (
              <LeaderboardTable players={remainingPlayers} />
            ) : (
              <div className="bg-white rounded-[16px] p-8 text-center">
                <p className="text-[#848a90] text-[14px]">
                  {searchQuery
                    ? "No players found matching your search."
                    : "No players in the leaderboard yet."}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
