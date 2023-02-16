import NavMain from "../MainGeneral/NavMain/NavMain";
import store from "../../store";
import WorkStudyImg from "./WorkStudyImg";
import WorkStudyCard from "./WorkStudyCard";
import WorkStudyRecommendPlaces from "./WorkStudyRecommendPlaces";
import ExploreAreas from "../MainGeneral/ExploreAreas/ExploreAreas";
import Instagrammed from "../MainGeneral/Instagrammed/Instagrammed";

export default function WorkStudy() {
  return (
    <>
      <WorkStudyImg />
      <WorkStudyCard />
      <NavMain categories={store} />
      <WorkStudyRecommendPlaces />
      <ExploreAreas />
      <Instagrammed />
    </>
  );
}
