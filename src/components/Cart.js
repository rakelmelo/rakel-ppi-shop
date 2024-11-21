import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Cart({ id, thumbnail, title, price, quantity }) {

    const { addItemToCart, subItemToCart } = useContext(CartContext);

    return (
        <div>
            <div>
                <img src={thumbnail} alt={thumbnail}/>
                    <h2>{title}</h2>
                    <p>{price}</p>
                    <div>
                        <button onClick={() => subItemToCart(id)}>-</button>
                        <h2>{quantity}</h2>
                        <button onClick={() => addItemToCart(id)}>+</button>
                    </div>
            </div>
            {/* Condição para ver se é > 0 o qtd de itens
        Se for maior redenriza em checkout, se não, não redenriza*/}
        </div>
    );
}