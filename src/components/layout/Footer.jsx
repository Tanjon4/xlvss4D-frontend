import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="px-8 pt-2">
      <div className="flex ">
        <div className="w-[50%]">
          <ul className="list-none flex space-x-12">
            <li><Link to="">Home</Link></li>
            <li><Link to="">Contact</Link></li>
            <li><Link to="">Login</Link></li>
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
            ©2025 – created by Mamy, Sarannah, Mihaja, Tanjona, Dayan 
          </p>
          <p>e-commerce</p>
        </div>
    </footer>
  );
};

export default Footer;
