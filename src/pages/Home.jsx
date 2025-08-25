import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Timer from "../components/sections/Timer";
import Card from "../components/sections/Card";

const products = [
  {
    price: 319.99,
    title: "Parfin",
    image: "https://i.pinimg.com/736x/d2/c4/ed/d2c4edf93d37a1d84ced20f7e5f66e05.jpg",
  },
  {
    price: 49.99,
    title: "Rouge a lèvre",
    image: "https://i.pinimg.com/736x/7d/2e/f6/7d2ef60703bbd33ec7315e4f371242f3.jpg",
  },
  {
    price: 909.99,
    title: "Sac",
    image: "https://i.pinimg.com/736x/34/02/bd/3402bd265c5a2e7958139f1ec4b7ad61.jpg",
  },
  {
    price: 199.99,
    title: "Painseau",
    image: "https://i.pinimg.com/736x/1d/9e/b7/1d9eb733ee0da6ea2efcecd27cf3e84e.jpg",
  },
  {
    price: 799.99,
    title: "Pack Maquillage ",
    image: "https://i.pinimg.com/736x/70/37/4c/70374ca408dbd630fea084caf3a197a3.jpg",
  },
  {
    price: 89.99,
    title: "Stylo",
    image: "https://i.pinimg.com/736x/53/b0/42/53b04266cabe7bba609e60e15d2ed9e2.jpg",
  },
  {
    price: 190.99,
    title: "Miroire",
    image: "https://i.pinimg.com/736x/3a/76/ad/3a76add014a5c0e143d55d7133fa8e28.jpg",
  },
  {
    price: 98.99,
    title: "Cahier",
    image: "https://i.pinimg.com/736x/d0/6f/13/d06f13b1e20b825cc7b5da997e4555ec.jpg",
  },
  {
    price: 129.99,
    title: "Lunette",
    image: "https://i.pinimg.com/736x/c1/09/a8/c109a84ddaba51a836995cef20a46dae.jpg",
  },
  {
    price: 1059.99,
    title: "Smartphone",
    image: "https://i.pinimg.com/736x/67/95/41/6795414aa67697f0dd0ba6f6d3ec642c.jpg",
  }
];

const Home = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Hero />

      {/* Espace au-dessus des cards */}
      <div className="mt-8 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-5 gap-0">
          {products.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>

      {/* Espace entre cards et Timer */}
      <div className="mt-10">
        <Timer />
      </div>

      <Footer />
    </>
  );
};

export default Home;
