import type { ReactNode } from "react";

interface FieldBoxProps {
  children: ReactNode;
}

function FieldBox({ children }: FieldBoxProps) {
  return (
    <div className="w-full bg-brand-overlay rounded-sm">
      <div className="flex items-center gap-x-2 w-11/12 px-4 py-3.5">
        {children}
      </div>
    </div>
  );
}

export default FieldBox;
