import { Card } from "react-bootstrap";

function MenuItem(props: any): JSX.Element {

  return (
    <Card style={{ width: '25rem', marginTop: '2rem' }}>
      <Card.Img variant="top" src={props.dish.image} />
      <Card.Body>
        <Card.Title style={{ cursor: 'pointer' }} onClick={() => { props.dishSelect(props.dish) }}>{props.dish.name}</Card.Title>
        <Card.Text>
          {props.dish.description}
        </Card.Text>
        <p>Price: <b> {props.dish.price} ILS</b></p>
        {props.dish.label && <p>Label: {props.dish.label} </p>}
      </Card.Body>
    </Card>
  );
}

export default MenuItem;