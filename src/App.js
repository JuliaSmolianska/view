import "./App.css";
import NavHeader from "./components/Header/Header";
import { LanguageContext } from "./languageContext";
import { useState, useEffect } from "react";
import store from "./store.js";
import MainGeneral from "./components/MainGeneral/MainGeneral";
import Footer from "./components/Footer/Footer";
import SeeDo from "./components/See&Do/See&Do";
import Stay from "./components/Stay/Stay";
import Shop from "./components/Shop/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodDrink from "./components/FoodDrink/FoodDrink";
import WorkStudy from "./components/WorkStudy/WorkStudy";

function App() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    console.log(language);
  }, [language]);

  return (
    <BrowserRouter basename="/">
      <div className="App">
        <LanguageContext.Provider
          value={{ language: language, setLanguage: setLanguage }}
        >
          <NavHeader categories={store} />
          <Routes>
            <Route exact path='/' element={<MainGeneral />} />
            <Route exact path='/seedo' element={<SeeDo />} />
            <Route exact path='/food' element={<FoodDrink />} />
            <Route exact path='/stay' element={<Stay />} />
            <Route exact path='/shop' element={<Shop />} />
            <Route exact path='/work' element={<WorkStudy />} />
          </Routes>
          <Footer categories={store} />
        </LanguageContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
