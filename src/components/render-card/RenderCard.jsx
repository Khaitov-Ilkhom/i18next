import Container from "../container/Container.jsx";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

const RenderCard = ({card}) => {
  const data = useTranslation()

  const navigate = useNavigate()

  return (
    <Container>
      <div className="p-3 font-[Montserrat]">
        <div>
          <img src={card.image} alt={card.title}/>
        </div>
        <div className="my-2">
          <span className="my-2 font-semibold">{card.date}</span>
          <h3 className="text-[#D05270] text-2xl font-semibold">{data.t("card-title")}</h3>
          <p className="my-2 text-[#424242]">{data.t("card-desc")}</p>
          <button onClick={() => navigate(`/single-card`)} className="text-[#D05270] border-b-2 border-[#D05270] font-semibold">{data.t("card-btn")}</button>
        </div>
      </div>
    </Container>
  )
}
export default RenderCard
