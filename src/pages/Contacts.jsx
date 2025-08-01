import { Link } from "react-router-dom";
import Navigation from "../components/layout/Navigation";

const Contacts = () => {
  return (
    <div>
      <Navigation/>
      <div className="d-flex flex-row align-items-center">
        <ul>
          <li><Link to={"/"}></Link>Home</li>
          <li className="active"><Link to={"/contact"}></Link>
            <i class="fa fa-angle-right" aria-hidden="true"></i>Contact
          </li>
        </ul>
      </div>

      {/* section map */}
      <div className="contairer">
        <div className="row">

        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="mb-3">Contacter Nous</h2>
            <p className="mb-4">

            </p>

          </div>
          <div className="col-lg-6">
            <h2 className="mb-4">Get In Touch With Us!</h2>
            <p className="mb-4">

            </p>
            
          </div>
        </div>
      </div>


      
    </div>
  );
}
export default Contacts;