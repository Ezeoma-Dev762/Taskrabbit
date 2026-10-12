import { LockKeyhole, BadgeCheck, UserGroup, CircleDot, CircleCheckBig } from "lucide-react";
import AllowedPriviledgeBox from "./AllowedPriviledgeBox";
import BorderRoundFull from "./BorderRoundFull";
import ClientReg from "./ClientReg";

function ClientAuth (){
    return (
        <div className="bg-white h-fit w-full max-w-[1150px] shadow-xl">
      <div className="flex flex-row">
        <div className="h-fit w-5/12 bg-brand-grey p-9 flex justify-center">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <BorderRoundFull styles="bg-brand-lightbrown">
                <p className="text-tiny font-bold text-[#785D49]">
                  CLIENT CIRCLE
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
                Got a To-Do List? Let's Get It Done.
              </p>
            </div>

            <div className="mt-3">
              <p className="text-brand-darkbrown text-justify text-small font-normal">
                From fixing things around the house to tackling everyday errands, find people with the skills to help you get more out of your day.
              </p>
            </div>

            <div className="flex flex-col gap-y-4 mt-6">
              <div>
                <AllowedPriviledgeBox
                  color="bg-brand-lightbrown"
                  priviledge="Find Your People"
                  iconLocation={<UserGroup size={16} />}
                >
                  Discover Taskers whose skills match what you need.
                </AllowedPriviledgeBox>
              </div>

              <div>
                <AllowedPriviledgeBox
                  color="bg-brand-primary"
                  priviledge="Your Time. Your Choice."
                  iconLocation={<CircleDot size={16} />}
                >
                  Explore profiles, compare options, and choose the right fit for your task.
                </AllowedPriviledgeBox>
              </div>

              <div>
                <AllowedPriviledgeBox
                  color="bg-brand-tertiary"
                  priviledge="From To-Do to Done"
                  iconLocation={<CircleCheckBig size={16} />}
                >
                  Keep your tasks, bookings, and conversations organised in one place.
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
                    YOUR NEXT FREE AFTERNOON STARTS HERE.
                  </p>

                  <p className="mt-1 text-xs italic leading-4 text-gray-600">
                    "You handle life. Let Tasker help with the tasks."
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
          <ClientReg />
        </div>
      </div>
    </div>
    );
}

export default ClientAuth;