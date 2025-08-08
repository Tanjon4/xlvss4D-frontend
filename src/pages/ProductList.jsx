import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";

const ProductList = () => {
    const [products] = useState([
        { id: 1, name: "Shampoo", price: "15.000 Ar" },
        { id: 2, name: "Hair Oil", price: "12.000 Ar" },
        { id: 3, name: "Body Lotion", price: "20.000 Ar" },
      ]);
    return (
        <>
        <Header/>
        <Navigation />
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Liste des Produits</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">Prix : {product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Voir Détails
            </button>
          </div>
        ))}
      </div>
    </div>
        </>
    )
}
export default ProductList;