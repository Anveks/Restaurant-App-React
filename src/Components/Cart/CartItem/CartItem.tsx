import "./CartItem.css";
import '../../../assets/css/Main.css'
import { useState } from "react";
import { cartStore, CartActionType } from "../../../Redux/CartState";

function CartItem(props: any): JSX.Element {
    const [amount, setAmount] = useState<number>(props.dish.amount);

    const cartItem = {
        itemId: props.dish.itemId,
        name: props.dish.name,
        amount: amount,
        price: Number(props.dish.price),
    }

    function handleAdd() {
        if (amount > 0) setAmount(amount + 1);

        cartStore.dispatch({
            type: CartActionType.handleCartAmount,
            payload: { cartItem, action: "add" }
        });
    }

    function handleRemove() {
        if (amount > 0) setAmount(amount - 1);

        cartStore.dispatch({
            type: CartActionType.handleCartAmount,
            payload: { cartItem, action: "remove" }
        });
    }

    if (amount === 0) return null;

    return (
        <div className="CartItem">
            <div className="name">{props.dish.name}</div>

            <div className="price"> Price: {props.dish.price} ₪ </div>

            <div className="amount">
                Amount:

                <button onClick={handleRemove}> - </button>
                <input type="number" value={amount} disabled />
                <button onClick={handleAdd}> + </button>

            </div>
        </div>
    );
}

export default CartItem;
