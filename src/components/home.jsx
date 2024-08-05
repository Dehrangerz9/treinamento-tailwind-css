import { PiStarFourFill } from "react-icons/pi";
import phone from "../assets/phone.png"
import playicon from "../assets/play-icon.png"
import powerpoint from "../assets/powerpoint-logo.svg"
import havard from "../assets/havard-logo.png"
import stanford from "../assets/stanford-logo.webp"
import pennsylvania from "../assets/pennsylvania-logo.png"
function Home(){
    return(
        <div className="flex flex-col">
            <div className="bg-slate-100 rounded-full self-center flex flex-row px-2 justify-center items-center">
                <PiStarFourFill className="text-red-600 self-center flex-none px-1" size={"2rem"}/>
                <p className="font-bold px-1">BENEFITS</p>
            </div>
            <p className="self-center w-1/3 text-4xl lg:text-xl mt-3 text-center leading-relaxed font-semibold"> Drive results 5x fasters by meeting people where they are</p>
            <div className="bg-red-600 p-8 text-slate-50 h-[50vh] mx-3 rounded-3xl overflow-y-hidden relative">
                <ul className="flex gap-5 bg-slate-50 xl:w-1/4 lg:w-[50%] rounded-full justify-center p-1 text-black">
                    <li className="text-red-500 font-semibold">Build with AI</li>
                    <li>Five minutes a day</li>
                    <li>Measure impact</li>
                </ul>
            <p className="text-4xl mt-20 w-64">Build and create with AI</p>
            <p className="lg:w-64 lg:leading-16">Instantly turn collateral into reserach-driven experiences</p>
            <button className="rounded-full bg-slate-50 text-red-600 px-3 py-1 font-semibold mt-6">Try the AI</button>
            <img src={phone} className="absolute xl:top-24 xl:right-52 lg:-bottom-[65%] lg:right-[8%]"/>
            <div className="flex w-56 bg-slate-50 rounded-lg text-black p-2 shadow-xl shadow-black/40 absolute xl:top-4 xl:right-[27%] lg:top-[28%] lg:right-[33%]">
                <img src={powerpoint} alt="logo power point" className="w-14 mx-3"/>
                <div>
                    <p className="font-semibold text-lg">Sales playbook</p>
                    <p className="text-slate-700">PPTX files</p>
                </div>
            </div>
            <div className="flex flex-col w-40 bg-slate-50 rounded-lg text-black p-2 shadow-xl shadow-black/40 absolute xl:bottom-16 xl:right-[27%] lg:bottom-4 lg:right-[42%]">
                <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center">
                    <p className="font-semibold text-4xl text-white">AI</p>
                </div>
                <p className="font-semibold text-2xl">Sideckick Artificial Intelligence</p>
            </div>
            <div className="flex flex-col w-40 lg:w-32 xl:w-40 bg-slate-50 text-black shadow-xl shadow-black/40 absolute  rounded-t-2xl rounded-b-2xl xl:top-[13%] xl:right-[6.5%] lg:top-[39%] lg:right-[2%] ">
                <div className="">
                    <p className="font-bold text-sm bg-slate-200 w-full border-b-2 border-slate-400 rounded-t-2xl p-2">List of tests</p>
                </div>
                <p className="font-semibold text-6xl lg:text-5xl flex items-center justify-center pt-2 pb-6 rounded-b-2xl">.PDF</p>
            </div>
            <div className="flex flex items-center justify-center flex-col p-2 pt-4 w-40 lg:w-32 xl:w-40 bg-slate-50 text-black shadow-xl shadow-black/40 absolute bottom-[13%] right-[6.5%] lg:bottom-[4%] lg:right-[3%] xl:bottom-[13%] xl:right-[6.5%] rounded-t-2xl rounded-b-2xl">
            <img src={playicon} alt="Play button" className="w-16 h-16 lg:w-8 lg:h-8 xl:w-8 xl:h-8"/>
                <p className="font-semibold text-sm ">video materials</p>
            </div>
            </div>
            <div className="grid grid-cols-4 2xl:grid-cols-2 2xl:w-1/2 2xl:self-center gap-5 xl:gap-10 mx-4 my-1 xl:my-5">
                <div className="bg-slate-100 flex flex-col items-center justify-center h-40 rounded-lg">
                    <p className="text-6xl">92<span className="text-2xl">%</span></p>
                    <p className="">of employees prefer Arest</p>
                </div>
                <div className="bg-slate-100 flex flex-col items-center justify-center h-40 rounded-lg">
                    <p className="text-6xl">+30<span className="text-2xl">%</span></p>
                    <p className="">conficende lift</p>
                </div>
                <div className="bg-slate-100 flex flex-col items-center justify-center h-40 rounded-lg">
                    <p className="text-6xl">500<span className="text-2xl">k</span></p>
                    <p className="">employees trained</p>
                </div>
                <div className="bg-slate-100 flex flex-col items-center justify-center h-40 rounded-lg">
                    <p className="text-6xl">&gt;90<span className="text-2xl">%</span></p>
                    <p className="">satisfaction rates</p>
                </div>
            </div>
            <div className="bg-slate-100 rounded-full self-center flex flex-row px-2 justify-center items-center mt-12">
                <PiStarFourFill className="text-red-600 self-center flex-none px-1" size={"2rem"}/>
                <p className="font-bold px-1">FEATURES</p>
            </div>
            <p className="self-center w-1/3 text-4xl lg:text-xl mt-3 text-center leading-relaxed font-semibold">How it works</p>
            <div className="flex mx-6 my-2 w-1/2 self-center">
                <div className="flex flex-col w-full rounded-lg">
                    <p>A better way to train</p>
                    <p>Less time, more impact. Back by Stanford research, Arest replaces legacy trainings with continuous enablement</p>
                    <div className="flex flex-row px-2">
                        <PiStarFourFill className="text-red-600 self-center flex-none px-1" size={"2rem"}/>
                        <p className="font-bold px-1">No new apps</p>
                    </div>
                    <div className="flex flex-row px-2">
                        <PiStarFourFill className="text-red-600 self-center flex-none px-1" size={"2rem"}/>
                        <p className="font-bold px-1">19% skill lift</p>
                    </div>
                    <div className="flex flex-row px-2">
                        <PiStarFourFill className="text-red-600 self-center flex-none px-1" size={"2rem"}/>
                        <p className="font-bold px-1">1-click acess to training</p>
                    </div>
                    <div className="flex flex-row px-2">
                        <PiStarFourFill className="text-red-600 self-center flex-none px-1" size={"2rem"}/>
                        <p className="font-bold px-1">Frontline-compliant</p>
                    </div>
                    <button className="bg-red-500 hover:bg-red-400 rounded-full text-white p-1 px-4 w-1/4">Read the research</button>
                </div>
                <div className="flex flex-col bg-red-600 w-full rounded-lg text-center">
                    <p className="font-bold text-white">Backed by research</p>
                    <div className="flex flex-row justify-center my-2">
                        <img className="size-16" src={havard} alt="" srcset="" />
                        <img className="size-16" src={stanford} alt="" srcset="" />
                        <img className="size-16" src={pennsylvania} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home