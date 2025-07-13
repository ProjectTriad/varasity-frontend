import Chatbox from "../chatbox/index.jsx";
import SidebarWithBurgerMenu from "../sidebar/index.jsx";

function ChatInterface(){
    return(
        <>
            <div className="grid grid-cols-1 h-screen">
                {/*<Chatbox className="col-span-2 bg-gray-100 w-full md:w-3/4 bg-gray-100 overflow-y-auto h-full" />*/}

                <SidebarWithBurgerMenu className=" bg-gray-800 text-white" />
              </div>

        </>
    )
}

export default ChatInterface