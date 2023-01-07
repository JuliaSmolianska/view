import './App.css';
import NavHeader from './components/Header/Header';
import {LanguageContext} from "./languageContext";
import { useState, useEffect } from 'react';
import store from './store.js';
import MainGeneral from './components/MainGeneral/MainGeneral';


function App() {
  const [language, setLanguage] = useState ("en");
  
  useEffect(() => {
    console.log(language)
 }, [language] )

  return (
    <div className="App">
      <LanguageContext.Provider value={{language:language, setLanguage:setLanguage}}>
      <NavHeader state={store} />
      <MainGeneral />
    </LanguageContext.Provider>
    </div>
  );
}

export default App;
