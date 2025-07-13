import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "../hero/index.jsx"
import FAQSection from "../faq/index.jsx";
import Contact from "../contact/index.jsx"
import Footer from "../footer/index.jsx"
import Content from "../content/index.jsx"

function Landing() {
    return(
            <>
        <div className="scroll-smooth">
            <Hero/>
            <Content/>
            <FAQSection/>
            <Contact/>
            <Footer/>
        </div>
        </>
    );
}

export default Landing;