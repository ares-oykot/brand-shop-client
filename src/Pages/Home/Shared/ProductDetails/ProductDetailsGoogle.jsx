import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';
const ProductDetailsGoogle = () => {
    const googleProduct = useLoaderData();
    const handleAddToCart = () => {
        const name = googleProduct.name;
        const description = googleProduct.description;
        const price = googleProduct.price;
        const type = googleProduct.productType;
        const brand = googleProduct.brand;
        const rating = googleProduct.rating;
        const photoURL = googleProduct.URL;
        const cart = { name, description, price, type, brand, rating, photoURL };

        fetch('https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Nice!!", "Product Added successful", "success");
                }
            });
    };
    return (
        <div>
            <div className="mt-5">
                <div className="lg:mx-96 p-8 bg-slate-200 rounded">
                    <div className="w-full">
                        <img className="mx-auto w-full rounded-t" src={googleProduct.URL} alt="" />
                    </div>
                    <div className="p-5 flex flex-col justify-between rounded-b bg-yellow-400 hover:bg-yellow-300 duration-300">
                        <div className="">
                            <p className="font-bold text-xl">Name : {googleProduct.name}</p>
                            <p>Description : {googleProduct.description}</p>
                            <p className="font-medium">Price : {googleProduct.price}</p>
                            <p className="font-medium">Type : {googleProduct.productType}</p>
                            <p className="font-medium">Brand : {googleProduct.brand}</p>
                            <span className="font-medium">Rating : {googleProduct.rating}
                            </span>
                        </div>
                        <div className="">
                            <button onClick={handleAddToCart} className="bg-sky-500 w-full hover:bg-sky-600 duration-200 px-7 py-1 rounded mt-1 font-medium">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsGoogle;