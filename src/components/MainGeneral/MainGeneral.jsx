import Generalimg from "./Generalimg/Generalimg";
import MainCards from "./MainCards/MainCards";
import NavMain from "./NavMain/NavMain";
import store from "../../store";
import RecommendPlaces from "./RecommendPlaces/RecommendPlaces";
import Advertising from "./Advertising/Advertising";

function MainGeneral() {
   return (
      <>
         <Generalimg />
         <MainCards />
         <NavMain categories={store} />
         <RecommendPlaces />
         <Advertising />
      </>
   )
}

export default MainGeneral;