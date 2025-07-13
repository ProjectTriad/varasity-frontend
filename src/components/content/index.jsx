import assistant from "../../assets/assistant.png"
import chatbot from "../../assets/Chat bot.png"
import news from "../../assets/News.png"

function Content(){
    return(
        <>
            <section id="features" class=" scroll-smooth py-5 bg-black  sm:py-16 lg:py-4">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <div class="relative lg:mb-12">
                            <div class="pl-28 pr-6">
                                <img class="relative h-96" src={assistant} alt="" />
                            </div>
                            {/*<div class="absolute left-1/5 pr-12 bottom-8 xl:bottom-20">*/}
                            {/*    <div class="max-w-xs max-h-xs bg-blue-600 rounded-lg sm:max-w-md sm:max-h-sm xl:max-w-sm xl:max-h-sm">*/}
                            {/*        <div class="px-2 py-2 sm:px-5 sm:py-4">*/}
                            {/*            <div>*/}
                            {/*                <blockquote>*/}
                            {/*                    <p class="text-sm font-medium text-white sm:text-lg">“You made it so simple”</p>*/}
                            {/*                </blockquote>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>

                        <div class="2xl:pl-16">
                            <h2 class="text-2xl font-bold leading-tight text-white sm:text-2xl lg:text-4xl lg:leading-tight">AI-Powered Financial Guidance.</h2>
                            <p class="text-xl leading-relaxed text-gray-400 mt-4">Ask any question from investment strategies to market trends and get instant, expert-level insights.</p>
                            <p class="mt-4 text-xl leading-relaxed text-gray-400">Learn & grow — Make smarter financial decisions over time</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-5 bg-black  sm:py-16 lg:py-4">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <div class="relative lg:mb-12 xl:col-end-auto">
                            <div class="pl-28 pr-6">
                                <img class="relative h-96" src={news} alt="" />
                            </div>
                            {/*<div class="absolute left-0 pr-12 bottom-8 xl:bottom-20">*/}
                            {/*    <div class="relative left-51 max-w-xs max-h-xs bg-blue-600 rounded-lg sm:max-w-md sm:max-h-sm xl:max-w-md xl:max-h-sm">*/}
                            {/*        <div class="px-2 py-2 sm:px-5 sm:py-4">*/}
                            {/*            <div class="">*/}
                            {/*                <blockquote>*/}
                            {/*                    <p class="text-sm font-medium text-white sm:text-lg">“You made it so simple”</p>*/}
                            {/*                </blockquote>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div class="2xl:pl-16 xl:col-start-auto">
                            <h2 class="text-2xl font-bold leading-tight text-white sm:text-2xl lg:text-4xl lg:leading-tight">Real-Time Market Updates & Alerts.</h2>
                            <p class="text-xl leading-relaxed text-gray-400 mt-4">Stay ahead with AI-curated news, stock alerts, and financial trends to make data-driven decisions.</p>
                            <p class="mt-4 text-xl leading-relaxed text-gray-400">Varasity continuously monitors the markets, filtering out the noise and delivering only relevant, actionable insights — so you never miss an opportunity.</p>
                        </div>

                    </div>
                </div>
            </section>

            <section class="py-5 bg-black  sm:py-16 lg:py-4">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <div class="relative lg:mb-12 xl:col-end-auto">
                            <div class="pl-28 pr-6">
                                <img class="relative h-96" src={chatbot} alt="" />
                            </div>
                            {/*<div class="absolute left-0 pr-12 bottom-8 xl:bottom-20">*/}
                            {/*    <div class="relative left-1/5 max-w-xs max-h-xs bg-blue-600 rounded-lg sm:max-w-md sm:max-h-sm xl:max-w-md xl:max-h-sm">*/}
                            {/*        <div class="px-2 py-2 sm:px-5 sm:py-4">*/}
                            {/*            <div class="">*/}
                            {/*                <blockquote>*/}
                            {/*                    <p class="text-sm font-medium text-white sm:text-lg">“You made it so simple”</p>*/}
                            {/*                </blockquote>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div class="2xl:pl-16 xl:col-start-auto">
                            <h2 class="text-2xl font-bold leading-tight text-white sm:text-2xl lg:text-4xl lg:leading-tight">Always Available, Anytime You Need</h2>
                            <p class="text-xl leading-relaxed text-gray-400 mt-4">24/7 access to your personal AI financial assistant—no need to schedule appointments or wait for market updates.</p>
                            <p class="mt-4 text-xl leading-relaxed text-gray-400">Finance never sleeps, and neither does your AI-powered investing partner.</p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Content