import { useContext } from "react";
import { AddToCartContext } from "../addToCartContext"; // Make sure this path is correct
import { useNavigate } from "react-router-dom"; // If you want to navigate between pages

const Dashboard = () => {
    const { products, removeFromCart, removeFromFavorite } = useContext(AddToCartContext);
    const navigate = useNavigate();  

    const handleCartClick = () => {
        navigate("/cart"); 
    };

    const handleWishlistClick = () => {
        navigate("/wishlist"); 
    };



    return (
        <div className="w-4/5 mx-auto">
            <div className='max-w-7xl mx-auto'>
                <div className="hero-content text-center bg-[#9538E2] mb-5">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-4">Statistics</h1>
                        <p className="text-white mb-4">
                            Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, <br /> we have it all!
                        </p>
                        <div>
                            {/* Separate Cart and Wishlist Buttons */}
                            <div className="flex space-x-5 justify-center">
                                <button
                                    onClick={handleCartClick}
                                    className='bg-white p-3 border rounded-xl'
                                >
                                    Cart
                                </button>
                                <button
                                    onClick={handleWishlistClick}
                                    className='bg-white p-3 border rounded-xl'
                                >
                                    Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Product Items Grid */}
            <div className="gap-6">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.product_id} className="border p-4 rounded-md flex justify-between items-center">
                            <div className="flex gap-6 items-center">
                            <img 
                                src={product.product_img}
                                alt={product.product_title}
                                className="w-full h-64 object-cover"
                            />
                            <div>
                            <h3 className="text-lg font-bold">{product.product_title}</h3>
                            <p>{product.description}</p>
                            <span className="font-semibold">Price: ${product.price}</span>
                            </div>
                            </div>
                            <div className="mt-3">
                                {/* Delete Button with Separate Remove Actions */}
                                <button
                                    onClick={() => { 
                                        removeFromCart(product.product_id); 
                                        removeFromFavorite(product.product_id); 
                                    }}
                                    className="bg-red-500 text-white p-2 rounded-md"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    );
};
export default Dashboard;




