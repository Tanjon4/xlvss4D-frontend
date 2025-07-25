import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Produits from "./pages/Produits";
import "./App.css"
import Devis from "./components/Devis";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/devis" element={<Devis />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;