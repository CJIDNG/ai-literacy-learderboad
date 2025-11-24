import svgPaths from "../imports/svg-7rirfo2mte";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="bg-white relative shrink-0 w-full rounded-[12px] md:rounded-none">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[24px] py-[16px] relative w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="flex flex-row items-center self-stretch w-full">
              <div className="bg-white box-border content-stretch flex gap-[8px] h-full items-center p-[8px] relative rounded-[8px] shrink-0 w-full">
                <div
                  aria-hidden="true"
                  className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]"
                />
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[20px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 20 20"
                    >
                      <g id="Frame">
                        <path
                          d={svgPaths.p1783a7f0}
                          fill="var(--fill-0, #848A90)"
                          id="Vector"
                        />
                      </g>
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Search user, number"
                    className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#848a90] text-[14px] bg-transparent border-none outline-none w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
