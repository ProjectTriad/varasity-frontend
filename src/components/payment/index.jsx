import {useParams} from "react-router-dom";
import NoPage from "../no-page/index.jsx"
const PaymentGateway = () => {
    const {plans} = useParams();

    let amount = "Invalid"
    if (plans==="teams"){
        amount = "$9.99"
    }else if (plans==="pro"){
        amount = "$4.99"
    }

    if(amount==="invalid"){
        return <NoPage/>
    }

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Finalise Payment</h2>


                <form className="space-y-4">
                    <label class="block my-3  text-base">Card number</label>
                    <input
                        type="text"
                        placeholder="Card Number"
                        className="w-full p-3  border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <div className="grid grid-cols-2">
                        <div className="m-1">
                            <label class="block my-3 text-base">Expiry date</label>
                            <input
                                type="text"
                                placeholder="MM/YY"
                                className="w-full  p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                        </div>
                        <div className="m-1">
                            <label class="block my-3 text-base">Security code</label>
                            <input
                                type="text"
                                placeholder="CVV"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                        </div>
                    </div>
                    <label class="block my-3  text-base">Country name</label>
                    <input
                        type="text"
                        placeholder="Country name"
                        className="w-full p-3  border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <input
                        type="text"
                        placeholder="State/Province/Region"
                        className="w-full p-3  border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <input
                        type="text"
                        placeholder="Pin code"
                        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                </form>
                <div className=" grid grid-cols-2">
                    <div className="font-bold text-xl justify-self-center">Total</div>
                    <p className="font-bold text-4xl justify-self-end">{amount}</p>
                </div>


                <button className="w-full mt-6 p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition">
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default PaymentGateway;