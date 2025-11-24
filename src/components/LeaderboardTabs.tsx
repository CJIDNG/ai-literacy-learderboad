import { LeaderboardTab } from "../types";

interface LeaderboardTabsProps {
  activeTab: LeaderboardTab;
  onTabChange: (tab: LeaderboardTab) => void;
}

export function LeaderboardTabs({ activeTab, onTabChange }: LeaderboardTabsProps) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[20px] items-center justify-center px-0 py-[20px] relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[32px] text-nowrap tracking-[-0.48px] whitespace-pre">
        Leaderboard
      </p>
      <div className="bg-[rgba(88,70,251,0.1)] box-border content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0">
        <button
          onClick={() => onTabChange("monthly")}
          className={`box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 w-[138px] transition-colors ${
            activeTab === "monthly" ? "bg-[#5a74d2]" : ""
          }`}
        >
          <p
            className={`font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${
              activeTab === "monthly" ? "text-white" : "text-black"
            }`}
          >
            Monthly
          </p>
        </button>
        <button
          onClick={() => onTabChange("alltime")}
          className={`box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 w-[138px] transition-colors ${
            activeTab === "alltime" ? "bg-[#5a74d2]" : ""
          }`}
        >
          <p
            className={`font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${
              activeTab === "alltime" ? "text-white" : "text-black"
            }`}
          >
            All Time
          </p>
        </button>
      </div>
    </div>
  );
}
