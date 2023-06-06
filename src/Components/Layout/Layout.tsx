import Body from "../Body/Body";
import Header from "../Header/Header";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <Header />
            <Body />
        </div>
    );
}

export default Layout;
