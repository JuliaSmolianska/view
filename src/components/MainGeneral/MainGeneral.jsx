import Generalimg from "./Generalimg/Generalimg";
import MainCards from "./MainCards/MainCards";
import NavMain from "./NavMain/NavMain";
import store from "../../store";

function MainGeneral() {
   return (
      <>
         <Generalimg />
         <MainCards />
         <NavMain categories={store} />
      </>
   )
}

export default MainGeneral;