import { Button, Card } from "react-bootstrap";
import "./Menu.css";
import { useRef, useState } from "react";
import { CartActionType, cartStore } from "../../../Redux/CartState";

function MenuItem(props: any): JSX.Element {

  function handleSubmit(e: any) {
    e.preventDefault();
    const enteredAmount = amountRef.current?.value;
    cartStore.dispatch({
      type: CartActionType.addItems,
      payload: {
        itemId: props.dish.id,
        name: props.dish.name,
        amount: Number(enteredAmount),
        price: Number(props.dish.price)
      }
    });
  }

  const amountRef = useRef<HTMLInputElement>(null);

  return (
    <Card style={{ width: '25rem', marginTop: '2rem' }}>
      <Card.Img variant="top" src={props.dish.image} />
      <Card.Body>
        <Card.Title style={{ cursor: 'pointer' }} onClick={() => { props.dishSelect(props.dish) }}>{props.dish.name}</Card.Title>
        <Card.Text>
          {props.dish.description}
        </Card.Text>
        <p>Price: <b> {props.dish.price} ₪</b></p>
        {props.dish.label && <p>Label: {props.dish.label} </p>}

        <form onSubmit={handleSubmit}>
          <label className="amount"> Amount: </label>
          <input
            required
            type="number"
            name="amount"
            min={1}
            max={5}
            step={1}
            ref={amountRef}
          />
          <button className="addBtn"> + Add </button>
        </form>

      </Card.Body>
    </Card>
  );
}

export default MenuItem;