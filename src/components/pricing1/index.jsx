import {useNavigate} from "react-router-dom";

export default function Price1() {
    const navigate = useNavigate()
    const  backHome = () => {
        navigate("/home")
    }
    return (
        <>
            <div className="relative">

                <div className=" group h-150 w-90 border-2 border-gray-200 rounded-2xl text-left p-10 font-poppins hover:text-white hover:bg-black transition-all duration-200">
                    <div
                        className="hidden group-hover:block absolute -inset-2 -z-1 bg-gradient-to-r from-yellow-300 via-purple-400 to-teal-200 blur-xl rounded-3xl opacity-80 w-95 h-155 transition-all duration-200  "></div>
                    <h2 className="font-bold text-lg pb-4 ">Basic</h2>
                    <h1 className="font-bold text-5xl pb-6">Free</h1>
                    <p className="text-gray-700 pb-6 group-hover:text-gray-400">Best Suited For: Beginners, solo investors.</p>
                    <button onClick={backHome}
                        className="rounded-xl cursor-pointer border-gray-400 border-2 h-14 w-70 hover:bg-white hover:text-black focus:bg-black focus:text-white focus:border-3 focus:border-white focus:ring-2 focus:ring-black mb-7 font-bold ">Continue
                        with Basic
                    </button>
                    <h3 className="font-bold text-lg pb-6 group-hover:text-white">What's included:</h3>
                    <div className="text-gray-700 text-17 list-none group-hover:text-gray-400">
                        <li className="pb-3">24/7 AI assistance</li>
                        <li className="pb-3">Best for Beginners</li>
                        <li className="pb-3">Real-Time Market Updates & Alerts</li>
                    </div>
                </div>
            </div>
        </>
    )
}
