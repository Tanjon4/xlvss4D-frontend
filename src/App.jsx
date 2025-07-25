import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";

const App = () => {

  const lang = useLangStore();
  const i18n = useTranslation();
  useEffect(() => {
    i18n.i18n.changeLanguage(lang.lang);
    document.documentElement.lang = lang.lang;
  }, [lang]);
  return (
      <RouterProvider router={router}/>
  );
}
export default App;