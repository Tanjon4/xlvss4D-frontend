import React from "react";
import { useLangStore } from "../store/language.store.jsx";

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLangStore();

  return (
    <button onClick={toggleLang}>
      Langue: {lang.toUpperCase()} (Cliquer pour changer)
    </button>
  );
}
