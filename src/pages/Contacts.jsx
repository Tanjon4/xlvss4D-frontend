import { Link } from "react-router-dom";
import Navigation from "../components/layout/Navigation";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Footer from "../components/layout/Footer";
import { useEffect } from 'react';

// Configuration des icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className=" py-4 px-5 md:px-10 max-w-7xl mx-auto w-full text-underline">
        <ul className="flex items-center gap-2 text-sm md:text-base">
          <li>
            <Link to="/" className="text-gray-600 hover:text-blue-800 transition-colors">{t("Accueil")}</Link>
          </li>
          <li className="text-gray-400">
            <i className="fas fa-angle-right"></i>
          </li>
          <li className="text-blue-600 font-medium">
            {t("Contact")}
          </li>
        </ul>
      </div>

      <main className="flex-grow px-5 md:px-10 py-8 max-w-7xl mx-auto w-full">
        {/* Section Map */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-10 h-96 md:h-[500px]">
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
              <Popup className="font-semibold">{t("Contact_Us")}</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Section Contact */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Informations de contact */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{t("Contacte_Us")}</h1>
              <p className="text-gray-600 leading-relaxed">
                {t("There_are")}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <i className="fas fa-phone-alt text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t("Phone")}</h3>
                    <p className="text-gray-600">0341231230</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <i className="fas fa-envelope text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t("email")}</h3>
                    <p className="text-gray-600">example@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <i className="fas fa-map-marker-alt text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t("addresse")}</h3>
                    <p className="text-gray-600">Lot VR 104 Ambohimiandra</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">
                    <i className="fas fa-clock text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t("heure_ouverture")}</h3>
                    <p className="text-gray-600">8h00 - 18h00 {t('days')}</p>
                    <p className="text-gray-600">{t("Dimanche")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{t("suivre")}</h2>
              <ul className="flex gap-4">
                {[
                  { icon: 'facebook-f', color: '#3b5998', url: 'https://facebook.com' },
                  { icon: 'twitter', color: '#1da1f2', url: 'https://twitter.com' },
                  { icon: 'instagram', color: '#e1306c', url: 'https://instagram.com' },
                  { icon: 'linkedin-in', color: '#0077b5', url: 'https://linkedin.com' },
                ].map((social, index) => (
                  <li key={index}>
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: social.color }}
                      aria-label={social.icon}
                    >
                      <i className={`fab fa-${social.icon}`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{t("prennez_contact")}</h2>
              <p className="text-gray-600 mb-6">{t("remplir")}</p>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-1">
                    <label htmlFor="input_nom" className="block text-sm font-medium text-gray-700 mb-1">{t("nom")}</label>
                    <input
                      id="input_nom"
                      type="text"
                      name="nom"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div className="md:col-span-1">
                    <label htmlFor="input_email" className="block text-sm font-medium text-gray-700 mb-1">{t("email")}</label>
                    <input
                      id="input_email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Votre email"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="input_site" className="block text-sm font-medium text-gray-700 mb-1">{t("site")}</label>
                    <input
                      id="input_site"
                      type="url"
                      name="site"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Votre site web"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="input_message" className="block text-sm font-medium text-gray-700 mb-1">{t("message")}</label>
                    <textarea
                      id="input_message"
                      name="message"
                      rows="5"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-50 bg-gray-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                   {t("envoyer_message")} 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contacts;