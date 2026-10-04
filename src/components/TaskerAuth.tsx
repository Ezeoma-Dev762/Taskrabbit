import { Apple, AtSign, BadgeCheck, BookOpenCheck, ContactRound, DoorOpen, KeyRound, LockKeyhole, ShieldLock } from "lucide-react";
import AllowedPriviledgeBox from "./AllowedPriviledgeBox";
import BorderRoundFull from "./BorderRoundFull";
import { GoogleIcon } from "../assets/components/GoogleIcon.tsx";

function TaskerAuth(){
    return (
        <div className="bg-white h-200 w-full max-w-[1150px] shadow-lg">
            <div className="flex flex-row">
                <div className="h-fit w-5/12 bg-brand-grey p-9 flex justify-center">
                    <div className="w-full">

                        <div className="mb-7 flex items-center justify-between">
                            
                            <BorderRoundFull styles="bg-brand-lightbrown">
                                <p className="text-tiny font-bold text-[#785D49]">PATRON CIRCLE</p>
                            </BorderRoundFull>

                            <div className="flex items-center gap-1">
                                <LockKeyhole
                                    size={14}
                                    className="text-brand-darkbrown"
                                />

                                <span className="text-brand-darkbrown text-tiny font-bold">
                                    Encrypted Vault
                                </span>
                            </div>

                        </div>

                        <div className="mb-2.5">
                            <p className="text-semilarge font-semibold">Custodians of Living Heritage.</p>
                        </div>

                        <div className="mb-6">
                            <p className="text-brand-darkbrown text-justify text-small font-normal">
                                Gain privileged admittance into verified atelier studios,
                                private salons, and bespoke commissioning chambers.
                            </p>
                        </div>

                        <div className="flex flex-col gap-y-4">
                            <div>
                                <AllowedPriviledgeBox color="bg-brand-lightbrown" priviledge="Private Viewing Rooms" iconLocation={<DoorOpen size={16}/>}>
                                    Reserve 1-on-1 virtual or atelier walkthroughs before public
                                    collection vernissages.
                                </AllowedPriviledgeBox>
                            </div>

                            <div>
                                <AllowedPriviledgeBox color="bg-brand-primary" priviledge="Commission Escrow Protection" iconLocation={<ShieldLock size={16}/>}>
                                    Milestone-gated financial release paired with real-time
                                    photographic progress logs.
                                </AllowedPriviledgeBox>
                            </div>

                            <div>
                                <AllowedPriviledgeBox color="bg-brand-tertiary" priviledge="Quarterly Collector Lookbook" iconLocation={<BookOpenCheck size={16}/>}>
                                    Hand-bound print retrospective delivered directly to your
                                    primary estate.
                                </AllowedPriviledgeBox>
                            </div>
                        </div>

                        <div className="w-full rounded-lg bg-[#EFEEEB] p-4 mt-8">
  

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
                                CERTIFIED PROVENANCE #0841
                            </p>

                            <p className="text-lg font-serif font-semibold leading-tight text-gray-800">
                                Vessel in Temmoku Glaze
                            </p>

                            <p className="mt-1 text-xs italic leading-4 text-gray-600">
                                "Acquiring through Atelier & Co. guarantees lineage
                                and authentic handcraft."
                            </p>

                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            
                            <p className="text-tiny font-bold text-gray-700">
                            Lady M. Vance, Oxford
                            </p>

                            <div className="flex items-center gap-1">
                            <BadgeCheck
                                size={14}
                                className="text-[#41653B]"
                            />

                            <span className="text-tiny font-bold text-[#41653B]">
                                Verified Patron
                            </span>
                            </div>

                        </div>

                        </div>
                    </div>
                </div>

                <div className="w-7/12 p-9 flex justify-center">
                    <div className="w-full">
                        <div className="flex justify-between mb-9">
                            <div className="flex flex-col">
                                <div className="w-fit">
                                    <p className="text-semilarge font-semibold">
                                        Begin Your Collecting Journey
                                    </p>
                                </div>
                                <div className="w-fit">
                                    <p className="text-tiny font-normal text-brand-darkbrown tracking-normal">
                                        Register for an authenticated patron portfolio.
                                    </p>
                                </div>
                            </div>
                            <div className="max-w-md flex flex-row mt-6 bg-brand-overlay rounded-sm p-1 mb-0">
                                <div className="px-4 py-1 rounded-sm bg-white">
                                    <div className="flex items-center gap-1">
                                        <span className="text-brand-black text-tiny tracking-normal text-center font-semibold">
                                            Register
                                        </span>
                                    </div>
                                </div>
                                <div className="px-4 py-1 rounded-sm">
                                    <div className="flex items-center gap-1">
                                        <span className="text-brand-darkbrown text-tiny tracking-normal text-center font-semibold">
                                            Sign In
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div className="max-w-md w-[293px] mt-6 bg-brand-overlay rounded-sm p-1 mb-0">
                                <div className="px-4 py-1 flex w-full justify-center rounded-sm">
                                    <div className="flex items-center gap-2">
                                        <Apple
                                            size={14}
                                            className="text-brand-darkbrown"
                                            fill="text-brand-darkbrown"
                                        />

                                        <span className="text-brand-darkbrown text-tiny font-bold">
                                            Continue with Apple
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-md w-[293px] mt-6 bg-brand-overlay rounded-sm p-1 mb-0">
                                <div className="px-4 py-1 flex w-full justify-center rounded-sm">
                                    <div className="flex items-center gap-2">
                                        {/* <Apple
                                            size={14}
                                            className="text-brand-darkbrown"
                                            fill="text-brand-darkbrown"
                                        /> */}
                                        <GoogleIcon />

                                        <span className="text-brand-darkbrown text-tiny font-bold">
                                            Continue with Google
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center mt-6">
                            <div className="flex-grow border-t border-brand-overlay"></div>
                            <span className="px-3 text-brand-darkbrown text-sm">OR VIA STUDIO CREDENTIALS</span>
                            <div className="flex-grow border-t border-brand-overlay"></div>
                        </div>

                        <div className="mt-6 w-full">
                            <form>
                                <div className="flex flex-col gap-y-5">
                                    <div className="flex flex-col gap-y-2 w-full">
                                        <div className="flex justify-between">
                                            <div className="w-fit">
                                                <label className="text-brand-darkbrown font-semibold">Full Legal Name</label>
                                            </div>
                                            <div className="w-fit">
                                                <span className="text-[#73796F] font-normal">For Provenance Ledger</span>
                                            </div>
                                        </div>

                                        <div className="w-full bg-brand-overlay rounded-sm">
                                            <div className="flex items-center gap-x-2 w-11/12 px-4 py-3.5">
                                                <ContactRound 
                                                size={15}
                                                className="text-[#73796F]"
                                            />

                                                <input id="name" name="name" type="text" placeholder="e.g. Elena Montrel-Nistoroy" className="w-full text-[#73796F] text-small"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-y-2 w-full">
                                        <div className="flex flex-row">
                                            <span className="w-fit">
                                                <label className="text-brand-darkbrown font-semibold">Email Address</label>
                                            </span>
                                        </div>

                                        <div className="w-full bg-brand-overlay rounded-sm">
                                            <div className="flex items-center gap-x-2 w-11/12 px-4 py-3.5">
                                                <AtSign 
                                                size={15}
                                                className="text-[#73796F]"
                                            />

                                                <input id="name" name="name" type="text" placeholder="johndoe@email.com" className="w-full text-[#73796F] text-small"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-y-2 w-full">
                                        <div className="flex flex-row">
                                            <span className="w-fit">
                                                <label className="text-brand-darkbrown font-semibold">Vault Passphrase</label>
                                            </span>
                                        </div>

                                        <div className="w-full bg-brand-overlay rounded-sm">
                                            <div className="flex items-center gap-x-2 w-11/12 px-4 py-3.5">
                                                <KeyRound 
                                                size={15}
                                                className="text-[#73796F]"
                                            />

                                                <input id="name" name="name" type="text" placeholder="••••••••••••" className="w-full text-[#73796F] text-small"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-y-2">
                                        <div>
                                            <p className="text-brand-darkbrown font-semibold">
                                                Curatorial Interests (Select all that apply)
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-4 gap-x-[18px] gap-y-2">
                                            <BorderRoundFull styles="bg-brand-lightbrown">
                                                <p className="text-tiny font-bold text-[#785D49] tracking-normal">Ceramic Tableware</p>
                                            </BorderRoundFull>

                                            <BorderRoundFull styles="bg-[#EFEEEB]">
                                                <p className="text-tiny font-bold text-brand-darkbrown tracking-normal">Statement Furniture</p>
                                            </BorderRoundFull>

                                            <BorderRoundFull styles="bg-[#EFEEEB]">
                                                <p className="text-tiny font-bold text-brand-darkbrown tracking-normal">Woven Wall Art</p>
                                            </BorderRoundFull>

                                            <BorderRoundFull styles="bg-[#EFEEEB]">
                                                <p className="text-tiny font-bold text-brand-darkbrown tracking-normal">Hand-forged Knives</p>
                                            </BorderRoundFull>

                                            <BorderRoundFull styles="bg-[#EFEEEB]">
                                                <p className="text-tiny font-bold text-brand-darkbrown tracking-normal">Architectural Ceramics</p>
                                            </BorderRoundFull>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskerAuth;