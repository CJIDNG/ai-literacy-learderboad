import svgPaths from "../imports/svg-7rirfo2mte";

interface Player {
  rank: number;
  username: string;
  phoneNumber: string;
  points: number;
  streak: string;
}

interface TopThreeCardsProps {
  players: Player[];
}

export function TopThreeCards({ players }: TopThreeCardsProps) {
  const getBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-[#fac65a]";
    if (rank === 2) return "bg-[#e2e2e2]";
    return "bg-[#d38163]";
  };

  const getBadgeTextColor = (rank: number) => {
    if (rank === 2) return "text-[#111111]";
    return "text-white";
  };

  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[16px] items-stretch md:items-center relative shrink-0 w-full">
      {players.map((player) => (
        <div
          key={player.rank}
          className="bg-white w-full md:basis-0 md:grow md:min-h-px md:min-w-px relative rounded-[16px] shrink-0"
        >
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
                {/* Mobile Layout */}
                <div className="md:hidden content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                  <div className="box-border content-stretch flex items-end pl-0 pr-[16px] py-0 relative shrink-0">
                    <div className="bg-[#111111] mr-[-16px] rounded-[200px] shrink-0 size-[48px]" />
                    <div
                      className={`${getBadgeColor(
                        player.rank
                      )} box-border content-stretch flex gap-[10px] items-center justify-center mr-[-16px] p-[6px] relative rounded-[12px] shrink-0 size-[20px]`}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]"
                      />
                      <p
                        className={`font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[10px] text-nowrap tracking-[-0.15px] whitespace-pre ${getBadgeTextColor(
                          player.rank
                        )}`}
                      >
                        {player.rank}
                      </p>
                    </div>
                  </div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[16px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                    {player.username}
                  </p>
                </div>
                {/* Desktop Layout */}
                <div className="hidden md:flex content-stretch items-start justify-between relative shrink-0 w-full">
                  <div className="box-border content-stretch flex items-end pl-0 pr-[16px] py-0 relative shrink-0">
                    <div className="bg-[#111111] mr-[-16px] rounded-[200px] shrink-0 size-[48px]" />
                    <div
                      className={`${getBadgeColor(
                        player.rank
                      )} box-border content-stretch flex gap-[10px] items-center justify-center mr-[-16px] p-[6px] relative rounded-[12px] shrink-0 size-[20px]`}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]"
                      />
                      <p
                        className={`font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[10px] text-nowrap tracking-[-0.15px] whitespace-pre ${getBadgeTextColor(
                          player.rank
                        )}`}
                      >
                        {player.rank}
                      </p>
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex gap-[4px] grow h-[32px] items-center justify-end min-h-px min-w-px relative shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 16 16"
                      >
                        <g id="certificate-basic">
                          <path
                            d={svgPaths.p5a7bf70}
                            fill="var(--fill-0, #F95F5F)"
                            id="Icon"
                          />
                        </g>
                      </svg>
                    </div>
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0c0c0c] text-[14px] text-nowrap whitespace-pre">
                      {player.points.toLocaleString()}
                    </p>
                  </div>
                </div>
                {/* Mobile Info Container - Points at end */}
                <div className="md:hidden content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full justify-between">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#848a90] text-[14px] text-nowrap whitespace-pre">
                        {player.phoneNumber}
                      </p>
                      <div className="relative shrink-0 size-[4px]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 4 4"
                        >
                          <circle
                            cx="2"
                            cy="2"
                            fill="var(--fill-0, #D9D9D9)"
                            id="Ellipse 125"
                            r="2"
                          />
                        </svg>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#848a90] text-[14px] text-nowrap whitespace-pre">
                        {player.streak}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-end relative shrink-0">
                      <div className="relative shrink-0 size-[16px]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 16 16"
                        >
                          <g id="certificate-basic">
                            <path
                              d={svgPaths.p5a7bf70}
                              fill="var(--fill-0, #F95F5F)"
                              id="Icon"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0c0c0c] text-[14px] text-nowrap whitespace-pre">
                        {player.points.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Desktop Info Container */}
                <div className="hidden md:flex content-stretch flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[16px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                    {player.username}
                  </p>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#848a90] text-[14px] text-nowrap whitespace-pre">
                      {player.phoneNumber}
                    </p>
                    <div className="relative shrink-0 size-[4px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 4 4"
                      >
                        <circle
                          cx="2"
                          cy="2"
                          fill="var(--fill-0, #D9D9D9)"
                          id="Ellipse 125"
                          r="2"
                        />
                      </svg>
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#848a90] text-[14px] text-nowrap whitespace-pre">
                      {player.streak}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
