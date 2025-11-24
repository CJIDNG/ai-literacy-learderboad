interface Player {
  rank: number;
  username: string;
  phoneNumber: string;
  points: number;
  streak: string;
}

interface LeaderboardTableProps {
  players: Player[];
}

export function LeaderboardTable({ players }: LeaderboardTableProps) {
  return (
    <div className="w-full">
      {/* Table Header */}
      <div className="bg-neutral-50 relative rounded-[16px] shrink-0 w-full mb-4">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
            <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#848a90] text-[12px]">
              <p className="relative shrink-0">Rank</p>
              <p className="basis-0 grow min-h-px min-w-px relative shrink-0 md:w-[249px] md:basis-auto md:grow-0">User</p>
              <p className="basis-0 grow min-h-px min-w-px relative shrink-0 hidden md:block">Numbers</p>
              <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-right">Points</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table Rows */}
      <div className="bg-white rounded-[16px] overflow-hidden">
        {players.map((player, index) => (
          <div
            key={player.rank}
            className={`relative shrink-0 w-full ${
              index < players.length - 1 ? "border-b border-[#f2f2f2]" : ""
            }`}
          >
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
                <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[12px] text-nowrap tracking-[-0.18px] whitespace-pre">
                      {player.rank}
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 md:w-[249px] md:basis-auto md:grow-0">
                    <div className="bg-[#111111] rounded-[133.333px] shrink-0 size-[32px] hidden md:block" />
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#111111] text-[14px] text-center text-nowrap tracking-[-0.21px] whitespace-pre">
                        {player.username}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#848a90] text-[14px] text-nowrap whitespace-pre hidden md:block">
                  {player.phoneNumber}
                </p>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#848a90] text-[14px] text-nowrap whitespace-pre md:hidden">
                  {player.phoneNumber}
                </p>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#111111] text-[14px] text-nowrap text-right whitespace-pre">
                  {player.streak} {player.points.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
