import { Link } from "react-router-dom";
import Navigation from "../components/layout/Navigation";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Footer from "../components/layout/Footer";
import { useEffect } from 'react';
import Header from "../components/layout/Header";

// Corriger les icônes manquants de Leaflet dans Webpack/Vite/CRA
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});




const Contacts = () => {
  return (
    <div>
      <Header/>
      <Navigation/>
      <div className="m-5 flex flex-row items-center">
        <ul className="flex flex-row gap-4">
          <li>
            <Link to="/" className="text-gray-700 hover:underline">Accueil</Link>
          </li>
          <li className="text-blue-600 font-semibold">
            <Link to="/contact" className="flex items-center gap-1">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
              Contact
            </Link>
          </li>
        </ul>
      </div>



      {/* section map */}
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md m-5">
      <MapContainer
        center={[-18.8792, 47.5079]} 
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-18.8792, 47.5079]}>
          <Popup>Nous sommes ici !</Popup>
        </Marker>
      </MapContainer>
    </div>

      {/* section contact form */}
      <div className="flex flex-col lg:flex-row gap-8 m-5">
        {/* Informations de contact */}
        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Nous contacter</h1>
            <p className="text-gray-600">
              Il existe de nombreuses façons de nous contacter. Vous pouvez nous envoyer un message, nous appeler ou nous écrire un email, choisissez ce qui vous convient le mieux.
            </p>
            <div className="space-y-1 text-gray-800">
              <p><i className="fas fa-phone-alt mr-2 text-blue-600"></i>0341231230</p>
              <p><i className="fas fa-envelope mr-2 text-blue-600"></i>example@gmail.com</p>
            </div>
            <div>
              <p className="text-gray-800">Adresse : Lot VR 104 Ambohimiandra</p>
            </div>
            <div className="text-gray-800">
              <p><i className="fas fa-clock mr-2 text-blue-600"></i>Heures d'ouverture : 8h00 - 18h00 (Lun-Ven)</p>
              <p>Dimanche : Fermé</p>
            </div>
          </div>

          {/* Suivez-nous */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Suivez-nous</h1>
            <ul className="flex flex-row gap-3">
              <li>
                <a href="https://www.facebook.com" className="w-10 h-10 flex items-center justify-center rounded-full text-white" style={{ backgroundColor: "#3a61c9" }}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="w-10 h-10 flex items-center justify-center rounded-full text-white" style={{ backgroundColor: "#41a1f6" }}>
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.google.com" className="w-10 h-10 flex items-center justify-center rounded-full text-white" style={{ backgroundColor: "#fb4343" }}>
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="w-10 h-10 flex items-center justify-center rounded-full text-white" style={{ backgroundColor: "#8f6247" }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="lg:w-1/2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Prenez contact avec nous !</h1>
            <p className="text-gray-600 mb-4">Remplissez le formulaire ci-dessous pour recevoir une réponse rapide et confidentielle.</p>
            <form method="post" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  id="input_nom"
                  type="text"
                  name="nom"
                  placeholder="Nom"
                  required
                  className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  id="input_email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  id="input_site"
                  type="url"
                  name="site"
                  placeholder="Site web"
                  required
                  className="border border-gray-300 p-3 rounded w-full md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  id="input_message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required
                  className="border border-gray-300 p-3 rounded w-full md:col-span-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  id="envoyer_message"
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded transition duration-300"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>

    <Footer />
      
    </div>
  
  );
}
export default Contacts;