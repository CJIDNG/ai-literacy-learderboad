import { useState } from "react";
import { Hero } from "./components/Hero";
import { LeaderboardTabs } from "./components/LeaderboardTabs";
import { TopThreeCards } from "./components/TopThreeCards";
import { SearchBar } from "./components/SearchBar";
import { LeaderboardTable } from "./components/LeaderboardTable";
import { Footer } from "./components/Footer";
import { mockMonthlyData, mockAllTimeData } from "./data/mockData";

export default function App() {
  const [activeTab, setActiveTab] = useState<"monthly" | "alltime">("monthly");
  const [searchQuery, setSearchQuery] = useState("");

  // Get data based on active tab
  const currentData = activeTab === "monthly" ? mockMonthlyData : mockAllTimeData;

  // Filter data based on search query
  const filteredData = currentData.filter(
    (player) =>
      player.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.phoneNumber.includes(searchQuery)
  );

  const topThree = filteredData.slice(0, 3);
  const remainingPlayers = filteredData.slice(3);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="max-w-[1536px] mx-auto px-[16px] md:px-[24px] py-[24px] md:py-[32px]">
        {/* Hero Section */}
        <Hero />

        {/* Leaderboard Section */}
        <LeaderboardTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Top 3 Players */}
        <div className="mb-8">
          <TopThreeCards players={topThree} />
        </div>

        {/* Search Bar */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Leaderboard Table */}
        <div className="mt-4">
          <LeaderboardTable players={remainingPlayers} />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
