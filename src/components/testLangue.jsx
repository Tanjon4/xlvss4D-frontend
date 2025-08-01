import React from "react";
import { useLangStore } from "../store/language.store.jsx";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLangStore();
  const { i18n } = useTranslation();
  
  const toggleLang = (event) => { 
    const newLang = event.target.value;
    setLang(newLang);
    i18n.changeLanguage(newLang);
  }
  return (
    <>
    <select onChange={toggleLang} className="bg-gray-800 border-gray-400 rounded border-x py-3 px-3">
      <option value="fr">Français</option>
      <option value="en">English</option>
      <option value="mg">Malagasy</option>
    </select>
    </>
  );


}
