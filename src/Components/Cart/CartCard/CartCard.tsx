import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CartActionType, cartStore } from '../../../Redux/CartState';
import CartItem from '../CartItem/CartItem';

function CartCard() {
    const [show, setShow] = useState(false);
    const [dishes, setDishes] = useState(cartStore.getState().cartItems);
    const [total, setTotal] = useState<number>(cartStore.getState().totalSum);

    useEffect(() => {
        const unsubscribe = cartStore.subscribe(() => {
            const cartState = cartStore.getState().cartOpen;
            const totalSum = cartStore.getState().totalSum;
            const dishes = cartStore.getState().cartItems;
            setDishes(dishes);
            setShow(cartState);
            setTotal(totalSum);
        });

        return () => unsubscribe();
    }, []);

    function handleModal() {
        if (show) {
            setShow(false);
            cartStore.dispatch({
                type: CartActionType.openCart,
                payload: cartStore.getState().cartOpen
                    ? false
                    : true
            });
        } else {
            setShow(true);
        }
    }

    function handleOrder() {
        // add order functionality
    }

    return (
        <>
            <Modal show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart:</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {dishes.map((d) => <CartItem dish={d} key={d.itemId} />)}

                </Modal.Body>
                <Modal.Footer>
                    <div className="total">Total: {total} ₪</div>
                    <Button variant="secondary" onClick={handleModal}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={handleOrder}>
                        Order
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartCard;
