import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import Cart from "./Cart";

export default function Checkout() {

    const { items, valorTotal } = useContext(CartContext);

    const Quantity = items.length;

    return (
        <section className="checkout">
            <h2>Checkout</h2>
            {items.map((item) => (<Cart key={item.id} {...item}></Cart>))}

            <h2>Valor total: {valorTotal}</h2>

{/* id para css */}
            <ul id="products" >
                {Quantity > 0 ? (
                    items.map((product) => (
                        <li key={product.id}>
                            <Cart {...product} />
                        </li>
                    ))
                ) : (
                    <p>No items in cart!</p>
                )}
            </ul>

            <Link to="/" className="product-actions">
                <button>RETURN</button>
            </Link>
        </section>
    );
}