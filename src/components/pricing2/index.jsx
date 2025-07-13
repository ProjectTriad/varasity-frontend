import {useNavigate} from "react-router-dom";
import PaymentGateway from "../payment/index.jsx"

export default function Price2() {
    const navigate = useNavigate()
    const handleNavigation = ()=>{
        navigate("/payment/pro")
    }
    return (
        <>
            <div className="relative">

                <div
                    className=" group h-150 w-90 border-2 border-gray-200 rounded-2xl text-left p-10 font-poppins hover:text-white hover:bg-black transition-all duration-200">
                    <div
                        className="hidden group-hover:block absolute -inset-2 -z-1 bg-gradient-to-r from-yellow-300 via-purple-400 to-teal-200 blur-xl rounded-3xl opacity-80 w-95 h-155 transition-all duration-200  "></div>
                    <h2 className="font-bold text-lg pb-4 ">Pro</h2>
                    <h1 className="font-bold text-5xl pb-6 ">$4.99</h1>
                    <p className="text-gray-700 pb-6 group-hover:text-gray-400">Best Suited For: Active investors, finance enthusiasts</p>
                    <button onClick={handleNavigation}
                        className="rounded-xl cursor-pointer border-gray-400 border-2 h-14 w-70 hover:bg-white hover:text-black focus:bg-black focus:text-white focus:border-3 focus:border-white focus:ring-2 focus:ring-black mb-7 font-bold ">Upgrade
                        to pro
                    </button>
                    <h3 className="font-bold text-lg pb-6 group-hover:text-white">What's included:</h3>
                    <div className="text-gray-700 text-17 list-none group-hover:text-gray-400">
                        <li className="pb-3">24/7 AI assistance</li>
                        <li className="pb-3">Best for Enthusiasts</li>
                        <li className="pb-3">Voice Assisted Market Updates</li>

                    </div>
                </div>
            </div>
        </>
    );
}
// shadow-[-30px_-30px_35px_rgba(255,215,0,0.2),5px_5px_35px_rgba(128,0,128,0.2),-5px_-5px_35px_rgba(128,0,128,0.1),30px_30px_35px_rgba(0,0,255,0.2)]