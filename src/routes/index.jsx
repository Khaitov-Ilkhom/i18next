import React from 'react'
import {Route, Routes} from "react-router-dom";
import Navbar from "../components/navbar/Navbar.jsx";
import Portfolio from "./portfolio/Portfolio.jsx";
import Blog from "./blog/Blog.jsx";
import Cv from "./cv/CV.jsx";
import Store from "./store/Store.jsx";
import Freelance from "./freelance/Freelance.jsx";
import AboutMe from "./about-me/AboutMe.jsx";
import Contact from "./contact/Contact.jsx";
import Single from "../components/single/Single.jsx";

const Index = () => {
    return (
        <Routes>
            <Route element={<Navbar/>}>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/" element={<Blog/>}/>
                <Route path="/cv" element={<Cv/>}/>
                <Route path="/store" element={<Store/>}/>
                <Route path="/freelance" element={<Freelance/>}/>
                <Route path="/about-me" element={<AboutMe/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="single-card" element={<Single/>}/>
            </Route>
        </Routes>
    )
}
export default Index
