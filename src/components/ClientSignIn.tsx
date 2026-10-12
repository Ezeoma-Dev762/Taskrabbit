import {
  ChevronRight,
  EyeOff,
  Mail,
  ShieldLock,
} from "lucide-react";
import { GoogleIcon } from "@/assets/components/GoogleIcon";
import { useState } from "react";
import { Button } from "./ui/button";
import { AppleIcon } from "@/assets/components/AppleIcon";
import ClientReg from "./ClientReg";

function TaskerSignIn() {
  const [isSignInClicked, setIsSignInClicked] = useState(true);

  return (
    <div className="w-full">
      {isSignInClicked ? (
        <div className="w-full">
          <div className="flex justify-between">
            <div className="flex">
              <div className="w-fit">
                <p className="text-semilarge font-semibold">Login</p>
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

          <div className="mt-9 w-full">
            <form>
              <div className="flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2 w-full">
                  <div className="flex flex-row">
                    <span className="w-fit">
                      <label className="text-brand-darkbrown font-semibold">
                        Email
                      </label>
                    </span>
                  </div>

                  <div className="w-full bg-brand-overlay rounded-sm">
                    <div className="flex items-center gap-x-2 w-11/12 px-4 py-3.5">
                      <Mail size={15} className="text-[#73796F]" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your Email"
                        className="w-full text-[#73796F] text-small outline-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-y-2 w-full">
                  <div className="flex flex-row">
                    <span className="w-fit">
                      <label className="text-brand-darkbrown font-semibold">
                        Password
                      </label>
                    </span>
                  </div>

                  <div className="w-full bg-brand-overlay rounded-sm">
                    <div className="flex items-center gap-x-2 w-full px-4 py-3.5">
                      <ShieldLock size={15} className="text-[#73796F]" />
                      <div className="w-full flex justify-between items-center">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your password"
                          className="w-full text-[#73796F] text-small font-normal outline-0"
                        />
                        <EyeOff size={15} className="text-[#73796F]" />
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  id="login-patron"
                  name="login-patron"
                  variant="ghost"
                  className="w-full text-[#FFFFFF] text-small font-semibold flex items-center justify-center gap-2 bg-[#41653B] rounded-sm mt-3 py-6 hover:bg-brand-overlay transition-colors duration-500 opacity-100 text-white hover:text-[#73796F] cursor-pointer"
                >
                  Login
                  <ChevronRight />
                </Button>

                <div className="flex items-center mt-5">
                  <div className="flex-grow border-t border-brand-overlay"></div>
                  <span className="px-3 text-brand-darkbrown text-sm">
                    or continue with
                  </span>
                  <div className="flex-grow border-t border-brand-overlay"></div>
                </div>

                <div className="flex flex-col mt-5 gap-y-1.5">
                  <Button className="w-full bg-brand-overlay rounded-sm p-1 mb-0 hover:bg-[color-mix(in_srgb,transparent_90%,black)] cursor-pointer">
                    <AppleIcon />

                    <span className="text-brand-darkbrown text-tiny font-bold">
                      Continue with Apple
                    </span>
                  </Button>

                  <Button className="w-full bg-brand-overlay rounded-sm p-1 mb-0 hover:bg-[color-mix(in_srgb,transparent_90%,black)] cursor-pointer">
                    <GoogleIcon />

                    <span className="text-brand-darkbrown text-tiny font-bold">
                      Continue with Google
                    </span>
                  </Button>
                </div>

                <div className="flex items-center justify-center mt-10">
                  <div className="flex flex-col text-center">
                    <span className="text-brand-darkbrown text-sm">
                      Don't have an account?
                    </span>
                    <a
                      href="#"
                      className="text-brand-darkbrown text-sm underline hover:text-[color-mix(in_srgb,transparent_10%,bg-bg-brand-primary)]"
                    >
                      Register here
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <ClientReg />
      )}
    </div>
  );
}

export default TaskerSignIn;
