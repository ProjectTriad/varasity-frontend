import {useNavigate} from "react-router-dom";
import google from "../../assets/google.png"

function Signup(){
    const navigate = useNavigate()
    const handleNavigation=()=>{
        navigate("/home")
    }
    return(
            <>
        <div class="min-h-screen  flex items-center justify-center">
            <div class="w-125 p-6 bg-white shadow-lg rounded-lg">

              <div class="flex mb-7">
                <h2 class="text-2xl font-bold mb-4">Sign up</h2>
                <p class="ml-auto ">Already have an account? &nbsp;</p><a href="/signin" class="font-bold hover:underline">Sign In</a>
              </div>
              <div class="">
                <form>
                  <label class="flex block my-3 text-lg">Name</label>
                  <input type="text" class="rounded-xl border border-gray-400 w-full p-2.5 h-14" placeholder="Name" />
                </form>
                <form>
                    <label class="flex block my-3 text-lg">Email</label>
                    <input type="text" class="rounded-xl border border-gray-400 w-full p-2.5 h-14"
                           placeholder="Email address"/>
                  </form>
                <form>
                  <div class="flex">
                    <label class="block my-3 text-lg">Password</label>

                  </div>
                  <input type="text" class="rounded-xl border border-gray-400 w-full p-2.5 h-14"
                    placeholder="Password (min. 8 character)" />
                </form>

                <button onClick={handleNavigation} class="rounded-xl mb-6 mt-6 bg-black font-bold text-white border-gray-300 w-full p-2.5 h-14 hover:bg-gray-700">Sign up</button>
                <button onClick={handleNavigation} class="rounded-xl bg-gray-100 flex flex-col font-bold border-gray-300 w-full p-2.5 h-14 hover:bg-gray-200">
                    <img src={google} className="relative w-8 h-8 bottom-0" alt="google"/>
                    <span className="relative bottom-6">Sign up with Google</span>
                </button>

              </div>
            </div>
          </div>
          </>
    )
}

export default Signup