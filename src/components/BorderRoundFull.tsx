import type { ReactNode } from "react";

interface BorderRoundFullProps {
  styles?: string;
  children: ReactNode;
}

function BorderRoundFull({
  styles,
  children,
}: BorderRoundFullProps) {
  return (
    <div
      className={`${styles ?? ""} w-fit px-4 py-[2px] rounded-full mb-0 truncate`}
    >
      {children}
    </div>
  );
}

export default BorderRoundFull;