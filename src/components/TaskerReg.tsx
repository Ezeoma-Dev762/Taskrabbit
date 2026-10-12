import {
  AtSign,
  BadgeCheck,
  ChevronRight,
  ContactRound,
  KeyRound,
  Leaf,
  LockKeyhole,
} from "lucide-react";
import { GoogleIcon } from "@/assets/components/GoogleIcon";
import { useState } from "react";
import { Button } from "./ui/button";
import { AppleIcon } from "@/assets/components/AppleIcon";
import TaskerSignIn from "./TaskerSignIn";
import SubmitButton from "./SubmitButton";
import FieldBox from "./FieldBox";
import { Badge } from "./ui/badge";

function TaskerReg() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggleServices(service: string) {
    setSelected((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  }

  const services = [
    "Cleaning & home organisation",
    "Repairs & maintenance",
    "Moving & furniture assembly",
    "Delivery & errands",
    "Gardening & outdoor services",
    "Other services",
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { value: "na", label: "North America (USD $ / CAD $)" },
    { value: "na", label: "North America (USD $ / CAD $)2" },
    { value: "na", label: "North America (USD $ / CAD $)3" },
  ];

  const [isChecked, setIsChecked] = useState(false);
  const [isSignInClicked, setIsSignInClicked] = useState(false);

  return (
    <div className="w-full">
      {!isSignInClicked ? (
        <div className="w-full">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="w-fit">
                <p className="text-semilarge font-semibold">
                  Let's Put Your Skills to Work.
                </p>
              </div>
              <div className="w-fit">
                <p className="text-tiny font-normal text-brand-darkbrown tracking-normal">
                  Create your profile and take the first step towards connecting
                  with potential clients.
                </p>
              </div>
            </div>
            <div className="max-w-md flex flex-row mt-6 bg-brand-overlay rounded-sm p-1 mb-0">
              <Button
                variant="ghost"
                className={`px-4 py-1 rounded-sm ${
                  !isSignInClicked
                    ? "bg-white text-brand-black pointer-events-none"
                    : "text-brand-darkbrown hover:bg-[color-mix(in_srgb,transparent_90%,black)] cursor-pointer"
                }`}
                onClick={() => setIsSignInClicked(false)}
              >
                <span className="text-brand-black text-tiny tracking-normal text-center font-semibold">
                  Register
                </span>
              </Button>

              <Button
                variant="ghost"
                className={`px-4 py-1 rounded-sm ${
                  isSignInClicked
                    ? "bg-white text-brand-black pointer-events-none"
                    : "text-brand-darkbrown hover:bg-[color-mix(in_srgb,transparent_90%,black)] cursor-pointer"
                }`}
                onClick={() => setIsSignInClicked(true)}
              >
                <span className="text-brand-darkbrown text-tiny tracking-normal text-center font-semibold">
                  Sign In
                </span>
              </Button>
            </div>
          </div>

          <div className="flex justify-between mt-9">
            <Button className="max-w-md w-[293px] mt-6 flex justify-center items-center gap-x-2.5 bg-brand-overlay rounded-sm p-1 mb-0 hover:bg-[color-mix(in_srgb,transparent_90%,black)] cursor-pointer">
              <AppleIcon />

              <span className="text-brand-darkbrown text-tiny font-bold">
                Continue with Apple
              </span>
            </Button>

            <Button className="max-w-md w-[293px] mt-6 flex justify-center items-center gap-x-2.5 bg-brand-overlay rounded-sm p-1 mb-0 hover:bg-[color-mix(in_srgb,transparent_90%,black)] cursor-pointer">
              <GoogleIcon />

              <span className="text-brand-darkbrown text-tiny font-bold">
                Continue with Google
              </span>
            </Button>
          </div>

          <div className="flex items-center mt-6">
            <div className="flex-grow border-t border-brand-overlay"></div>
            <span className="px-3 text-brand-darkbrown text-sm">
              OR JOIN WITH EMAIL
            </span>
            <div className="flex-grow border-t border-brand-overlay"></div>
          </div>

          <div className="mt-6 w-full">
            <form>
              <div className="flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2 w-full">
                  <div className="flex">
                    <div className="w-fit">
                      <label className="text-brand-darkbrown font-semibold">
                        Full Name
                      </label>
                    </div>
                  </div>

                  <FieldBox>
                    <ContactRound size={15} className="text-[#73796F]" />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full text-[#73796F] text-small outline-0"
                    />
                  </FieldBox>
                </div>

                <div className="flex flex-col gap-y-2 w-full">
                  <div className="flex">
                    <span className="w-fit">
                      <label className="text-brand-darkbrown font-semibold">
                        Email Address
                      </label>
                    </span>
                  </div>

                  <FieldBox>
                    <AtSign size={15} className="text-[#73796F]" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your email address"
                      className="w-full text-[#73796F] text-small outline-0"
                    />
                  </FieldBox>
                </div>

                <div className="flex flex-col gap-y-2 w-full">
                  <div className="flex">
                    <span className="w-fit">
                      <label className="text-brand-darkbrown font-semibold">
                        Password
                      </label>
                    </span>
                  </div>

                  <FieldBox>
                    <KeyRound size={15} className="text-[#73796F]" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Create a strong password"
                      className="w-full text-[#73796F] text-small outline-0"
                    />
                  </FieldBox>
                </div>

                <div className="flex flex-col gap-y-2 mt-2.5">
                  <div>
                    <p className="text-brand-darkbrown font-semibold">
                      What services do you offer? (Select all that apply)
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                    {services.map((service) => {
                      const isSelected = selected.includes(service);

                      return (
                        <button
                          key={service}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => toggleServices(service)}
                          className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                          <Badge
                            variant={isSelected ? "default" : "outline"}
                            className={
                              isSelected
                                ? "bg-brand-lightbrown cursor-pointer rounded-full px-3 py-1 text-tiny font-bold text-[#785D49] tracking-normal"
                                : "bg-[#EFEEEB] cursor-pointer rounded-full px-3 py-1 text-tiny font-bold text-brand-darkbrown tracking-normal"
                            }
                          >
                            {service}
                          </Badge>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-y-2 mt-0.5">
                  <div>
                    <p className="text-brand-darkbrown font-semibold">
                      Where do you offer your services?
                    </p>
                  </div>

                  <div className="w-full bg-brand-overlay rounded-sm">
                    <div className="flex items-center gap-x-2 w-11/12 px-4 py-3.5">
                      <div className="relative">
                        <select
                          id="department"
                          value={selectedValue}
                          onChange={(e) => setSelectedValue(e.target.value)}
                          className="font-normal text-brand-black text-small disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 w-full"
                        >
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full rounded-sm mt-0.5">
                  <div className="flex items-center gap-x-2 w-11/12">
                    <div className="flex gap-3">
                      <input
                        id="remember-me"
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        className={`${isChecked ? "bg-red-500" : ""} h-5 w-5 rounded border-gray-300 bg-[#41653B] text-[#73796F] cursor-pointer`}
                      />
                      <label
                        htmlFor="remember-me"
                        className="text-xs text-brand-black font-normal select-none cursor-pointer flex my-auto"
                      >
                        Send me practical tips, platform updates, and
                        opportunities from Tasker.
                      </label>
                    </div>
                  </div>
                </div>

                <SubmitButton>
                  Next
                  <ChevronRight />
                </SubmitButton>

                <div className="flex items-center justify-center mt-10">
                  <div className="flex flex-col text-center">
                    <span className="text-brand-darkbrown text-sm">
                      Already have an account?
                    </span>
                    <a
                      href="#"
                      className="text-brand-darkbrown text-sm underline hover:text-[color-mix(in_srgb,transparent_10%,bg-bg-brand-primary)]"
                    >
                      Sign in
                    </a>
                  </div>
                </div>

                <div className="w-full flex justify-center gap-4 mt-11">
                  <div className="px-4 py-1 flex flex-col items-center w-full justify-center rounded-sm">
                    <div className="flex flex-col items-center">
                      <LockKeyhole size={18} className="text-[#745945]" />

                      <span className="text-brand-black text-tiny font-bold space-x-[0.44px]">
                        256-Bit Escrow
                      </span>
                    </div>
                    <div>
                      <p className="text-tiny text-[#73796F] font-normal">
                        Funds held in trust
                      </p>
                    </div>
                  </div>

                  <div className="px-4 py-1 flex flex-col items-center w-full justify-center rounded-sm">
                    <div className="flex flex-col items-center">
                      <BadgeCheck size={18} className="text-[#745945]" />

                      <span className="text-brand-black text-tiny font-bold space-x-[0.44px]">
                        Guild Curated
                      </span>
                    </div>
                    <div>
                      <p className="text-tiny text-[#73796F] font-normal">
                        Jury peer review
                      </p>
                    </div>
                  </div>

                  <div className="px-4 py-1 flex flex-col items-center w-full justify-center rounded-sm">
                    <div className="flex flex-col items-center">
                      <Leaf size={18} className="text-[#745945]" />

                      <span className="text-brand-black text-tiny font-bold space-x-[0.44px]">
                        Slow Craft
                      </span>
                      <div></div>
                      <div>
                        <p className="text-tiny text-[#73796F] font-normal">
                          Living wage verified
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <TaskerSignIn />
      )}
    </div>
  );
}

export default TaskerReg;
