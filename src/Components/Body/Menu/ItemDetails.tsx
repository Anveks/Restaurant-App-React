import { Card } from "react-bootstrap";
import ItemComments from "./ItemComments";


function ItemDetails(props: any): JSX.Element {

    console.log(props.dish);

    return (
        <div className="ItemDetails">
            <Card style={{ width: '33rem', marginTop: '2rem' }}>
                <Card.Img variant="top" src={props.dish.image} />
                <Card.Body>
                    <Card.Title>{props.dish.name}</Card.Title>
                    <Card.Text>
                        {props.dish.description}
                    </Card.Text>
                    <p>Price: <b> {props.dish.price} ILS</b></p>
                    {props.dish.label && <p>Label: {props.dish.label} </p>}
                    <p>Category: <b> {props.dish.category} </b></p>

                    <hr />

                    <ItemComments dishId={props.dish.id} />
                </Card.Body>
            </Card>
        </div>
    );
}

export default ItemDetails;
