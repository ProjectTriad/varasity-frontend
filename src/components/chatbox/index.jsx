export default function Chatbox() {

    return (
        <>


                    <div >
                        {/*<SidebarWithBurgerMenu className="col-span-1 bg-gray-800 text-white" />*/}

                        <h1 className="text-3xl flex justify-center items-center p-10">How can I help you?</h1>
                        <div className="relative flex justify-center items-center">

                            <div className="absolute -inset-2 z-0 bg-gradient-to-r from-yellow-200 via-purple-300 to-teal-200 blur-xl rounded-2xl opacity-100"></div>
                            <div className="relative w-85 h-18 bg-white shadow-[0px_1px_1px_2px_rgb(216,216,216)]  rounded-3xl md:w-100 lg:w-150">
                                <input type="text" placeholder="Ask anything" className="h-15 w-70 p-2 focus:outline-none pl-5 md:w-125 lg:w-185" />
                                <div className="relative flex items-center float-right p-3 bottom-12">
                                    <img src="https://img.icons8.com/?size=100&id=60700&format=png&color=000000" alt="icon" className="relative w-7 flex justify-end" />
                                </div>
                            </div>
                        </div>
                    </div>


        </>
    );
}