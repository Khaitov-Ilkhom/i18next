import "./Hero.css"
import hero from "../../images/hero.png"
import {FaLinkedinIn, FaTwitter} from "react-icons/fa";
import {BsMedium} from "react-icons/bs";
import {useTranslation} from "react-i18next";


const Hero = () => {

  const data = useTranslation()

  return (
    <div className="hero">
      <div className="hero-title">
        <h2>{data.t("posts")}</h2>
        <h3>{data.t("title")}</h3>
        <p>{data.t("desc")}</p>
        <div className="buttons">
          <button className="bg-[#47ACDF]"><FaTwitter/> Twitter</button>
          <button className="bg-[#1275B1]"><FaLinkedinIn/> Linkedin</button>
          <button className="bg-[#000000]"><BsMedium/> Medium</button>
        </div>
      </div>
      <div className="hero-img">
        <img src={hero} alt="Hero"/>
      </div>
    </div>
  )
}
export default Hero
