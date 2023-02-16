import NavMain from "../MainGeneral/NavMain/NavMain";
import store from "../../store";
import FoodDrinkImg from "./FoodDrinkImg";
import FoodDrinkGid from "./FoodDrinkGid";
import FoodDrinkCard from "./FoodDrinkCard";
import FoodDrinkRecommendPlaces from "./FoodDrinkRecommendPlaces";


export default function FoodDrink() {
  return (
    <>
      <FoodDrinkImg />
      <FoodDrinkCard />
      <NavMain categories={store} />
      <FoodDrinkRecommendPlaces />
      <FoodDrinkGid />
    </>
  );
}
