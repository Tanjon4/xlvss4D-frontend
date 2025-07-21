import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Produits from "./pages/Produits";
import React, { useEffect } from "react";
import "./App.css"
import { useLangStore } from "./store/language.store.jsx";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/testLangue.jsx";


const App = () => {

  const lang = useLangStore();
  const i18n = useTranslation();
  useEffect(() => {
    i18n.i18n.changeLanguage(lang.lang);
    document.documentElement.lang = lang.lang;
  }, [lang]);
  return (
    
    // <BrowserRouter>
    //   <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/produits" element={<Produits />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <h1 className="text-blue-700">{i18n.t("welcome")}</h1>
      {/* ... */}
      <LanguageSwitcher /> 

    </div>
  );
}
export default App;