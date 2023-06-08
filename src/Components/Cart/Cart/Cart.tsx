import { useEffect, useState } from "react";
import { cartStore } from "../../../Redux/CartState";
import "./Cart.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Cart(): JSX.Element {
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        const unsubscribe = cartStore.subscribe(() => {
            const totalPriceRedux = cartStore.getState().totalSum;
            setTotalPrice(totalPriceRedux);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="Cart">
            {totalPrice > 0 && <div><ShoppingCartIcon /> Total Sum: {totalPrice} ₪</div>}
        </div>
    );
}

export default Cart;
