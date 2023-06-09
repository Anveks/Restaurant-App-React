import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CartActionType, cartStore } from '../../../Redux/CartState';

function CartCard() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const unsubscribe = cartStore.subscribe(() => {
            const cartState = cartStore.getState().cartOpen;
            setShow(cartState);
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

    return (
        <>
            <Modal show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModal}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleModal}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartCard;
