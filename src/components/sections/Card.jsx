import { useState } from "react";

const Card = ({ title, price, image }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative border border-gray-300 bg-white shadow-none rounded-none overflow-hidden group">
      {/* Heart Icon */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-2 right-2 z-10 text-white text-lg"
        title="J'adore"
      >
        <span
          className={`text-xl transition-colors duration-300 ${
            liked ? "text-red-500" : "text-gray-300"
          }`}
        >
          ♥
        </span>
      </button>

      {/* Product Image */}
      <img
        src={image || "https://via.placeholder.com/200"}
        alt={title || "Produit"}
        className="w-full h-40 object-cover"
      />

      {/* Title + Price */}
      <div className="px-4 pt-4 text-center">
        <p className="font-semibold text-lg">{title || "Titre manquant"}</p>
        <p className="text-gray-600">
          {typeof price === "number" ? `$${price.toFixed(2)}` : "Prix indisponible"}
        </p>
      </div>

      {/* Buy Button */}
      <div className="h-10 mt-2 w-full">
        <button
          className="
            opacity-0
            invisible
            group-hover:opacity-100
            group-hover:visible
            transition-opacity
            duration-300
            ease-in-out
            w-full
            bg-red-400
            text-white
            py-2
            select-none
            rounded-none
          "
        >
          Acheter
        </button>
      </div>
    </div>
  );
};

export default Card;
