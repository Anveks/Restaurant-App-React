import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from "react";
import { CartActionType, cartStore } from "../../../Redux/CartState";
import "./Cart.css";

function Cart(): JSX.Element {
    const [totalPrice, setTotalPrice] = useState<number>(cartStore.getState().totalSum);

    useEffect(() => {
        const unsubscribe = cartStore.subscribe(() => {
            const reduxTotalSum = cartStore.getState().totalSum;
            setTotalPrice(reduxTotalSum);
        });

        return () => unsubscribe();
    }, []);

    function handleCart() {
        cartStore.dispatch({ type: CartActionType.openCart, payload: cartStore.getState().cartOpen ? false : true });
    }

    return (
        <div className="Cart" onClick={handleCart}>
            {totalPrice > 0 && <div><ShoppingCartIcon /> Total: {totalPrice} ₪</div>}
        </div>
    );
}

export default Cart;
