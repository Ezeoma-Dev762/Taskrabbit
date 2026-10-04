import type { ReactNode } from "react";

interface BorderRoundFullProps {
  color?: string;
  priviledge?: string;
  iconLocation?: ReactNode;
  children: ReactNode;
}

function AllowedPriviledgeBox({
  color,
  children,
  priviledge,
  iconLocation
}: BorderRoundFullProps) {
  return (
    <div
      className="w-full bg-white rounded-sm mb-0 flex justify-center items-center p-2.5"
    >
      <div className="flex flex-row w-11/12">
        <div className="w-1/12 mr-5 flex justify-center">
          <div
            className={`${color ?? ""} p-1 h-1/2 rounded-lg flex w-full items-center`}
          >
            {iconLocation}
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="w-fit">
            <p className="text-medium font-semibold">
              {priviledge}
            </p>
          </div>

          <div className="w-fit">
            <p className="text-tiny font-normal tracking-normal">
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllowedPriviledgeBox;