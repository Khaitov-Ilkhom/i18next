import Container from "../../../components/container/Container.jsx";
import {cards} from "../../../card-info/Card.jsx";
import RenderCard from "../../../components/render-card/RenderCard.jsx";

const AllProduct = () => {

  return (
    <Container>
      <div className="my-[50px] w-full flex justify-center items-center flex-col">
        <ul className="flex justify-center items-center gap-5 text-xl font-semibold my-[30px]">
          <li className="px-4 text-[#D05270] border-b-2 border-[#D05270]">All</li>
          <li className="px-4 text-[#424242]">UI Design</li>
          <li className="px-4 text-[#424242]">UX Design</li>
          <li className="px-4 text-[#424242]">Product Design</li>
          <li className="px-4 text-[#424242]">Articles</li>
          <li className="px-4 text-[#424242]">Tutorials</li>
          <li className="px-4 text-[#424242]">News</li>
        </ul>
        <div className="grid grid-cols-2 gap-4 max-w-[1200px]">
          {
            cards.map(card =>
              <RenderCard card={card} key={card.id}/>
            )
          }
        </div>
      </div>

    </Container>
  )
}
export default AllProduct
