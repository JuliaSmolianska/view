import Generalimg from "./Generalimg/Generalimg";
import MainCards from "./MainCards/MainCards";
import NavMain from "./NavMain/NavMain";
import store from "../../store";
import RecommendPlaces from "./RecommendPlaces/RecommendPlaces";
import Advertising from "./Advertising/Advertising";
import ExploreAreas from "./ExploreAreas/ExploreAreas";
import Instagrammed from "./Instagrammed/Instagrammed";
import StockholmNumbers from "./StockholmNumbers/StockholmNumbers";

function MainGeneral() {
   return (
      <>
         <Generalimg />
         <MainCards />
         <NavMain categories={store} />
         <RecommendPlaces />
         <Advertising />
         <ExploreAreas />
         <Instagrammed />
         <StockholmNumbers />
      </>
   )
}

export default MainGeneral;