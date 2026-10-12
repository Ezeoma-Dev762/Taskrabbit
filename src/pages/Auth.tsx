import { Cog, RockingChair } from "lucide-react";
import BorderRoundFull from "../components/BorderRoundFull";
import TaskerAuth from "../components/TaskerAuth";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ClientAuth from "@/components/ClientAuth";

function Auth() {
  const [isRoleClicked, setIsRoleClicked] = useState(false);

  return (
    <div className="mt-8">
      <div className="flex flex-col">
        <BorderRoundFull styles="bg-brand-overlay mx-auto">
          <p className="text-brand-darkbrown text-tiny font-bold">
            REGISTRY
          </p>
        </BorderRoundFull>

        <div className="max-w-fit mx-auto mt-0 mb-0">
          <p className="text-brand-black text-huge font-semibold">TASKBUDDY</p>
        </div>

        <div className="max-w-md mx-auto mt-0.5 mb-0">
          <p className="text-brand-darkbrown text-center text-small font-normal">
            Connecting people who need a hand with skilled people ready to help.
          </p>
        </div>

        <div className="max-w-md flex flex-row mx-auto mt-6 mb-6 bg-brand-overlay rounded-xl p-1.5">
          <Button
            variant="ghost"
            className={`px-8 py-2 rounded-xl ${
              !isRoleClicked
                ? "bg-white text-brand-black pointer-events-none"
                : "text-brand-darkbrown hover:bg-[color-mix(in_srgb,transparent_90%,black)] cursor-pointer transition-colors duration-300"
            }`}
            onClick={() => setIsRoleClicked(false)}
          >
            <Cog size={14} className="text-brand-darkbrown" />

            <span className="text-small text-center font-semibold">
              Tasker
            </span>
          </Button>

          <Button
            variant="ghost"
            className={`px-8 py-2 rounded-xl flex items-center my-auto ${
              isRoleClicked
                ? "bg-white text-brand-black pointer-events-none"
                : "text-brand-darkbrown hover:bg-[color-mix(in_srgb,transparent_90%,black)] cursor-pointer transition-colors duration-300"
            }`}
            onClick={() => setIsRoleClicked(true)}
          >
            <RockingChair size={14} className="text-brand-darkbrown" />

            <span className="text-small text-center font-semibold">
              User
            </span>
          </Button>
        </div>

      </div>

      <div className="flex justify-center">
        {
          !isRoleClicked
            ? <TaskerAuth />
            : <ClientAuth />
        }
      </div>
    </div>
  );
}

export default Auth;
