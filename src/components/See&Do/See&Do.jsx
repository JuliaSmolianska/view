import NavMain from "../MainGeneral/NavMain/NavMain";
import store from "../../store";
import SeeDoImg from "./See&DoImg/See&DoImg";
import SeeDoRecommendPlaces from "./SeeDoRecommendPlaces/SeeDooRecommendPlaces";
import SeeDoCard from "./SeeDoCard/SeeDoCard";


export default function SeeDo() {
  return (
    <>
      <SeeDoImg />
      <SeeDoCard />
      <NavMain categories={store} />
      <SeeDoRecommendPlaces />
    </>
  );
}
