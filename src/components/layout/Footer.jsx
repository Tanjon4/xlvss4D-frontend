import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Footer = () => {
const { t } = useTranslation();
  return (
    <footer className="px-8 pt-2">
      <div className="flex ">
        <div className="w-[50%]">
          <ul className="list-none flex space-x-12">
            <li><Link to="">{t("home")}</Link></li>
            <li><Link to="">{t("contacts")}</Link></li>
            <li><Link to="">{t("login")}</Link></li>
          </ul>
          
        </div>
        <div className="w-[50%] text-right space-x-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" style={{ color: "#4b4747ff", fontSize: "0.8rem" }}></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" style={{ color: "#4b4747ff", fontSize: "0.8rem" }}></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x-twitter" style={{ color: "#4b4747ff", fontSize: "0.8rem" }}></i>
            </a>
        </div>
      </div>
      <div style={{ marginTop: "2rem" }}>
          <p>
            {t("copy_rigth")}
          </p>
          <p>e-commerce</p>
        </div>
    </footer>
  )
}
export default Footer;
