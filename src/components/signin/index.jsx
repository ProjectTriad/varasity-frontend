import {useNavigate} from "react-router-dom";
import ForgotPassword from "../forgot-password/index.jsx"
import google from "../../assets/google.png"

function Signin() {
  const navigate = useNavigate()
  const handleNavigation=()=>{
      navigate("/home")
  }
  return (
    <>
      <div class="min-h-screen  flex items-center justify-center">
        <div class="w-125 p-6 bg-white shadow-lg rounded-lg">

          <div class="flex mb-7">
            <h2 class="text-2xl font-bold mb-4">Sign in</h2>
            <p class="ml-auto ">Don’t have an account? &nbsp;</p><a href="/signup" class="font-bold hover:underline">Join now</a>
          </div>
          <div class="">
            <form>
              <label class="flex block my-3 text-lg">Email</label>
              <input type="text" class="rounded-xl border border-gray-400 w-full p-2.5 h-14"
                     placeholder="Email address"/>
            </form>
            <form>
              <div class="flex">
                <label class="block my-3 text-lg">Password</label>
                <a href="/reset" class="ml-auto mt-3 text-lg text-gray-600 hover:text-black hover:underline">Forgot
                  Password?</a>
              </div>
              <input type="text" class="rounded-xl border border-gray-400 w-full p-2.5 h-14"
                     placeholder="Password (min. 8 character)"/>
            </form>

            <button onClick={handleNavigation}
              class="rounded-xl mb-6 mt-6 bg-black font-bold text-white border-gray-300 w-full p-2.5 h-14 hover:bg-gray-700">Sign
              in
            </button>
            <button onClick={handleNavigation} class="rounded-xl bg-gray-100 flex flex-col font-bold border-gray-300 w-full p-2.5 h-14 hover:bg-gray-200">
              <img src={google} className="relative w-8 h-8 bottom-0" alt="google"/>
              <span className="relative bottom-6">Sign in with Google</span>
          </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Signin