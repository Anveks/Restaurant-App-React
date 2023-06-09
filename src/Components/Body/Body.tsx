import CartCard from "../Cart/CartCard/CartCard";
import Routing from "../Layout/Routing/Routing";
import "./Body.css";

function Body(): JSX.Element {
    return (
        <div className="Body">
            <Routing />
            <CartCard />
        </div>
    );
}

export default Body;
