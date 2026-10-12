import {
  BadgeCheck,
  LockKeyhole,
  Rss,
  Sprout,
  Wrench
} from "lucide-react";
import AllowedPriviledgeBox from "./AllowedPriviledgeBox";
import BorderRoundFull from "./BorderRoundFull";
import TaskerReg from "./TaskerReg.tsx";

function TaskerAuth() {

  return (
    <div className="bg-white h-fit w-full max-w-[1150px] shadow-xl">
      <div className="flex flex-row">
        <div className="h-fit w-5/12 bg-brand-grey p-9 flex justify-center">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <BorderRoundFull styles="bg-brand-lightbrown">
                <p className="text-tiny font-bold text-[#785D49]">
                  TASKER COMMUNITY
                </p>
              </BorderRoundFull>

              <div className="flex items-center gap-1">
                <LockKeyhole size={14} className="text-brand-darkbrown" />

                <span className="text-brand-darkbrown text-tiny font-bold">
                  TRUSTED
                </span>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-semilarge font-semibold">
                You're Good at Something. Let More People Know.
              </p>
            </div>

            <div className="mt-3">
              <p className="text-brand-darkbrown text-justify text-small font-normal">
                Turn what you do best into opportunities. Build your profile, showcase your skills, and connect with people looking for the services you offer.
              </p>
            </div>

            <div className="flex flex-col gap-y-4 mt-6">
              <div>
                <AllowedPriviledgeBox
                  color="bg-brand-lightbrown"
                  priviledge="Put Your Skills Out There"
                  iconLocation={<Rss size={16} />}
                >
                  Show people what you do, what you're good at, and the services you offer.
                </AllowedPriviledgeBox>
              </div>

              <div>
                <AllowedPriviledgeBox
                  color="bg-brand-primary"
                  priviledge="Meet Your Next Client"
                  iconLocation={<Wrench size={16} />}
                >
                  Help potential customers discover your services and reach out about their needs.
                </AllowedPriviledgeBox>
              </div>

              <div>
                <AllowedPriviledgeBox
                  color="bg-brand-tertiary"
                  priviledge="Build Your Own Momentum"
                  iconLocation={<Sprout size={16} />}
                >
                  Manage your availability, grow your reputation through genuine reviews, and work towards your goals.
                </AllowedPriviledgeBox>
              </div>
            </div>

            <div className="w-full rounded-lg bg-[#EFEEEB] p-4 mt-12">
              <div className="flex gap-3">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-sm">
                  <img
                    src="../src/assets/cup.jpg"
                    alt="Vessel in Temmoku Glaze"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-tiny font-semibold tracking-wide text-[#705921]">
                    USER STORY #0841
                  </p>

                  <p className="text-lg font-serif font-semibold leading-tight text-gray-800">
                    YOUR NEXT OPPORTUNITY COULD START HERE.
                  </p>

                  <p className="mt-1 text-xs italic leading-4 text-gray-600">
                    "Your skills deserve to be seen. Let's put them to work."
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-tiny font-bold text-gray-700">
                  Lady M. Vance, Oxford
                </p>

                <div className="flex items-center gap-1">
                  <BadgeCheck size={14} className="text-[#41653B]" />

                  <span className="text-tiny font-bold text-[#41653B]">
                    Verified Patron
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-7/12 p-9 flex justify-center">
          <TaskerReg />
        </div>
      </div>
    </div>
  );
}

export default TaskerAuth;
