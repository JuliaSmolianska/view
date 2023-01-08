import Generalimg from "./Generalimg/Generalimg";
import MainCards from "./MainCards/MainCards";
import NavMain from "./NavMain/NavMain";
import store from "../../store";
import RecommendPlaces from "./RecommendPlaces/RecommendPlaces";

function MainGeneral() {
   return (
      <>
         <Generalimg />
         <MainCards />
         <NavMain categories={store} />
         <RecommendPlaces />
      </>
   )
}

export default MainGeneral;