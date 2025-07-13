import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/index.jsx";
import News from "./components/news-main/index.jsx";
import Signin from "./components/signin/index.jsx";
import Signup from "./components/signup/index.jsx";
import Pricing from "./components/pricing/index.jsx";
import ChatInterface from "./components/home/index.jsx";
import NoPage from "./components/no-page/index.jsx"
import ForgotPassword from "./components/forgot-password/index.jsx";
import PaymentGateway from "./components/payment/index.jsx"


function App() {
  return (
    <>
      <BrowserRouter>
	    <Routes>
        <Route path={"/"} index element={<Landing />} />
        <Route path={"landing"} index element={<Landing />} />
        <Route path="news-main" element={<News />} />
        <Route path="home" element={<ChatInterface/>} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="reset" element={<ForgotPassword/>}/>
        <Route path="payment/:plans" element={<PaymentGateway/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
