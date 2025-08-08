import React from "react";
import { useLangStore } from "../store/language.store.jsx";

export default function LanguageSwitcher() {
  const { lang, setCurrency } = useLangStore();
  const toggleLang = (event) => { 
    const newLang = event.target.value;
    setLang(newLang);
  }
  return (
    <>
    <select name="" id="" onChange={toggleLang} className="bg-gray-800 border-gray-400 rounded border-x py-3 px-3">
      <option value="fr">Français</option>
      <option value="en">English</option>
      <option value="mg">Malagasy</option>
    </select>
    </>
  );


}
