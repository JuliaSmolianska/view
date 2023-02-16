import ShopCard from "./ShopCard/ShopCard";
import ShopImg from "./ShopImg/ShopImg";
import NavMain from "../../components/MainGeneral/NavMain/NavMain";
import store from "../../store";
import ShopRecommendPlaces from "./ShopRecommendPlaces/ShopRecommendPlaces";
import GidShop from "./GidShop/GidShop";

export default function Shop() {
  return (
    <>
      <ShopImg />
      <ShopCard />
      <NavMain categories={store} />
      <ShopRecommendPlaces />
      <GidShop />
    </>
  );
}
