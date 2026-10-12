import { Button } from "./ui/button";
import type { ReactNode } from "react";

interface SubmitProps {
  children: ReactNode;
}

function SubmitButton({ children } : SubmitProps) {
  return (
    <Button
      type="submit"
      id="submit-patron"
      name="submit-patron"
      variant="ghost"
      className="w-full text-[#FFFFFF] text-small font-semibold flex items-center justify-center gap-2 bg-[#41653B] rounded-sm mt-3 py-6 hover:bg-brand-overlay transition-colors duration-500 opacity-100 text-white hover:text-[#73796F] cursor-pointer"
    >
      {children}
    </Button>
  );
}

export default SubmitButton;
