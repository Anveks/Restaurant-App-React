import { Table } from 'react-bootstrap';
import comments from '../../../data/comments';
import dateFormat, { masks } from "dateformat";

function ItemComments(props: any): JSX.Element {

    const itemComments = comments.filter((c) => c.dishId === props.dishId);
    console.log(itemComments);

    return (
        <div className="ItemComments">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>comment</th>
                        <th>author</th>
                        <th>date</th>
                    </tr>
                </thead>
                {itemComments.map((c, index) =>
                    <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{c.comment}</td>
                            <td>{c.author}</td>
                            <td>{dateFormat(c.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                        </tr>
                    </tbody>
                )}
            </Table>
        </div>
    );
}

export default ItemComments;
