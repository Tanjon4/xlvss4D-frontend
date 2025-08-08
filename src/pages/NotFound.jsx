import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";

const NotFound = () => {
  return (
    <div className="">
      <Header />
      <Navigation />
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
}
export default NotFound;