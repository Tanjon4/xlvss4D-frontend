import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

const Login = () => {
  return (
    <>
      <Navigation />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form className="bg-white shadow-md rounded-2xl p-10 w-full max-w-md">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Login</h1>

          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="surname" className="block text-gray-700 font-semibold mb-2">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your surname"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="enter your phone number"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
