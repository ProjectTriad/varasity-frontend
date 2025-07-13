import {ArrowUpRight } from 'lucide-react';


function NewsComponents(){
    return(
        <>



                        <div class="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition">
                            <a href="#" class="block w-full h-48 sm:h-64 overflow-hidden relative">
                                <img src="https://www.livemint.com/lm-img/img/2024/08/06/1600x900/Nifty_1667546435835_1722972479755.jpg?auto=compress&cs=tinysrgb&w=400"
                                    alt="card 1 image"
                                    class="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
                                    loading="lazy"/>
                            </a>

                            <div class="p-6">
                                <a href="#" class="text-lg font-semibold text-gray-900 hover:text-blue-700 transition">
                                    <h2>New Trends in Market</h2>
                                </a>
                                <p class="text-gray-600 mt-2">
                                    Check out the latest trends hitting the market. Invest in the future.
                                </p>
                            </div>

                            <div class="p-6 flex justify-between items-center border-t">
                                <div class="flex items-center space-x-3">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                                        class="w-10 h-10 rounded-full border border-gray-300 bg-gray-100 cursor-pointer object-cover transition-transform duration-200 hover:scale-110 "
                                        alt="avatar 1"
                                        loading="lazy"/>
                                    <div>
                                        <span class="block font-medium text-gray-900 cursor-pointer hover:text-blue-700 transition ">John Doe</span>
                                        <span class="text-sm text-gray-500">Sept 19, 2021</span>
                                    </div>
                                </div>
                                <span class="text-slate-950 text-sm font-medium cursor-pointer hover:text-blue-700 transition "><ArrowUpRight /></span>
                            </div>
                        </div>



        </>
    )
}

export default NewsComponents
