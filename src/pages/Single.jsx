import React, { useState } from "react";
import Navigation from "../components/layout/Navigation";

const Single = () => {
    const [count, setCount] = useState(0);
    const [selectedImage, setSelectedImage] = useState("src/assets/img/face.png");
    
    // Images pour la galerie
    const productImages = [
        "src/assets/img/face (1).png",
        "src/assets/img/face (2).png",
        "src/assets/img/face (3).png",
        

    ];

    return (
        <>
            <Navigation />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                        <div className="mb-4 flex justify-center">
                            <img 
                                src={selectedImage} 
                                alt="Product main" 
                                className="w-full max-w-lg h-100 object-contain rounded-lg shadow-md"
                            />
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {productImages.map((img, index) => (
                                <div 
                                    key={index} 
                                    className={`cursor-pointer border-2 p-1 rounded ${selectedImage === img ? 'border-blue-500' : 'border-gray-200'}`}
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img 
                                        src={img} 
                                        alt={`Product view ${index + 1}`} 
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="lg:w-3/5">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 m-4">Pocket cotton <br /> sweatshirt</h1>
                        <p className="text-gray-500 mb-5 m-4">
                            Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. 
                            Pellentesque diam dolor, elementum etos lobortis des mollis ut...
                        </p>
                        <p className="mb-5 text-center p-4 m-4 bg-red-400 text-base"> FREE DELIVERY <i class="fa-solid fa-truck"></i></p>

                        <p className="text-2xl font-bold mb-6 m-4">
                            Price: <span className="text-red-500">$ 100</span>
                        </p>
                        
                        <div className="mb-8">
                            <p className="text-lg font-semibold mb-2 m-4">Quantity:</p>
                            <div className="flex items-center m-4">
                                <button 
                                    type="button" 
                                    onClick={() => setCount(count > 0 ? count - 1 : 0)} 
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
                                >
                                    -
                                </button>
                                <input 
                                    type="text" 
                                    value={count} 
                                    readOnly 
                                    className="w-12 h-10 text-center border-t border-b border-gray-300" 
                                />
                                <button 
                                    type="button" 
                                    onClick={() => setCount(count + 1)} 
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
                                >
                                    +
                                </button>
                                <button 
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded ml-4"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Single;