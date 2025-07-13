function ForgotPassword(){
    return(
        <>
            <div class="min-h-screen  flex items-center justify-center">
                <div class="w-125 p-6 bg-white shadow-lg rounded-lg">

                  <div class="flex mb-7">
                    <h2 class="text-2xl font-bold mb-4"> Change Password</h2>
                  </div>
                  <div class="">
                    <form>
                      <label class="flex block my-3 text-lg">Email</label>
                      <input type="text" class="rounded-xl border border-gray-400 w-full p-2.5 h-14" placeholder="Enter your email" />
                    </form>
                    <form>
                      <div class="flex">
                        <label class="block my-3 text-lg">New Password</label>
                      </div>
                      <input type="text" class="rounded-xl border border-gray-400 w-full p-2.5 h-14"
                        placeholder="Password (min. 8 character)" />
                    </form>
                    <form>
                      <div class="flex">
                        <label class="block my-3 text-lg">Confirm password</label>
                      </div>
                      <input type="text" class="rounded-xl border border-gray-400 w-full p-2.5 h-14"
                        placeholder="Password (min. 8 character)" />
                    </form>
                    <div class="flex">
                    <button class="rounded-xl mb-6 mt-6 bg-black font-bold text-white border-gray-300 w-1/2.5 p-2 h-10  hover:bg-gray-700">Reset Password</button>
                    <a href="/signin" class="m-7 hover:underline">Return to login</a>
                  </div>
                  </div>
                </div>
              </div>
        </>
    )
}

export default ForgotPassword