import {useTranslation} from "react-i18next";
import Container from "../container/Container.jsx";
import image from "../../images/card-img-1.png"

const Single = () => {
  const data = useTranslation()

  return (
    <Container>
      <div className="flex justify-center items-center flex-col">
        <div>
          <img className="max-w-[1000px] my-[50px]" src={image} alt="image"/>
        </div>
        <div className="max-w-[1000px] mb-[50px]">
          <h3 className="text-[#3A0CA3] text-2xl font-semibold">{data.t("single-card-title")}</h3>
          <p className="text-[#424242] text-lg my-4">{data.t("single-card-desc")}</p>
        </div>
      </div>
    </Container>
  )
}
export default Single
