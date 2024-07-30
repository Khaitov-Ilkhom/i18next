import "./Navbar.css"
import {NavLink, Outlet} from "react-router-dom";
import logo from "../../images/logo-text.png"
import logo2 from "../../images/Hire Me.png"
import {Select} from "antd";
import {useTranslation} from "react-i18next";
import Container from "../container/Container.jsx";

const Navbar = () => {
    const data = useTranslation()

    const handleChange = (value) => {
        data.i18n.changeLanguage(value)
        localStorage.setItem("lang", value)
        console.log(value)
    }
    return (
        <Container>
            <div className="w-full flex justify-around items-center gap-2 my-4">
                <div className="flex justify-center items-center gap-3">
                    <img className="max-w-[250px]" src={logo} alt="Logo"/>
                    <img className="max-w-[100px]" src={logo2} alt="Logo"/>
                </div>
                <nav className="flex justify-center items-center gap-3">
                    <ul className="flex justify-center items-center gap-4 text-lg">
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink to="/">Blog</NavLink></li>
                        <li><NavLink to="/cv">CV</NavLink></li>
                        <li><NavLink to="/store">Store</NavLink></li>
                        <li><NavLink to="/freelance">Freelance</NavLink></li>
                        <li><NavLink to="/about-me">About Me</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <Select
                      defaultValue={localStorage.getItem("lang")}
                        className="max-w-[100px]"
                      onChange={handleChange}
                      options={[
                          { value: 'uz', label: 'UZ' },
                          { value: 'ru', label: 'RU' },
                          { value: 'en', label: 'EN' },
                      ]}
                    />
                </nav>
            </div>
            <Outlet/>
        </Container>
    )
}
export default Navbar
