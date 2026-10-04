import { Flashlight, Search } from "lucide-react";
import BorderRoundFull from "../components/BorderRoundFull";
import TaskerAuth from "../components/TaskerAuth";

function Auth() {
  return (
    <div className="mt-8">
        <div className="flex flex-col">
            <BorderRoundFull styles="bg-brand-overlay mx-auto">
                <p className="text-brand-darkbrown text-tiny font-bold">TASKRABBIT REGISTRY</p>
            </BorderRoundFull>

            <div className="max-w-fit mx-auto mt-0 mb-0">
                <p className="text-brand-black text-huge font-semibold">MY MVP</p>
            </div>

            <div className="max-w-md mx-auto mt-0.5 mb-0">
                <p className="text-brand-darkbrown text-center text-small font-normal">
                    An exclusive enclave uniting discerning 
                    collectors with the world's master artisans.
                </p>
            </div>

            <div className="max-w-md flex flex-row mx-auto mt-6 mb-6 bg-brand-overlay rounded-xl p-1.5 mb-0">
                <div className="px-8 py-2 rounded-xl bg-white">
                    <div className="flex items-center gap-1">
                                <Search
                                    size={14}
                                    className="text-brand-darkbrown"
                                />

                                <span className="text-brand-black text-small text-center font-semibold">
                                    Patron & Collector
                                </span>
                    </div>
                    </div>
                <div className="px-8 py-2 rounded-xl">
                    <div className="flex items-center gap-1">
                                <Flashlight
                                    size={14}
                                    className="text-brand-darkbrown"
                                />

                                <span className="text-brand-darkbrown text-small text-center font-semibold">
                                    Artisan & Maker
                                </span>
                            </div>
                </div>
            </div>

        </div>
        
        <div className="flex justify-center">
            <TaskerAuth />
        </div>
    </div>
  );
}

export default Auth;