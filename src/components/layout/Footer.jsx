import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Footer = () => {
  return (
    <footer style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
      <div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <h5><Link to="">Home</Link></h5>
            <h5><Link to="">Contact</Link></h5>
            <h5><Link to="">Login</Link></h5>
        </div>

        <div style={{ marginTop: "2rem" }}>
            <h5>
                ©2025 – Your trusted online store by{" "}
                <span style={{ color: "red" }}>e-commerce</span>
            </h5>
        </div>
      </div>

      <div
        style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "flex-start", // icônes alignées à gauche
            width: "150px" // ajuste selon l'espace souhaité
        }}
        >
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f" style={{ color: "#1877F2", fontSize: "1.5rem" }}></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" style={{ color: "#E4405F", fontSize: "1.5rem" }}></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter" style={{ color: "#000", fontSize: "1.5rem" }}></i>
        </a>
        </div>

    </footer>
  );
};

export default Footer;
