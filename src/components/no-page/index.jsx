import errimg from "../../assets/404.png"
function NoPage(){
    return(
        <>
            <div class="text-center text-white flex flex-col items-center justify-center min-h-screen">
                <img className="w-[300px] h-[300px]" src={errimg} alt="404 error"/>
                <h2 class="text-2xl font-semibold mt-4 text-black">Uh-oh That's unexpected.</h2>
                <p class="text-gray-400 mt-2">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
                <a href="/" class="mt-6 inline-block bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">Back to Homepage</a>
            </div>
        </>
    )
}

export default NoPage