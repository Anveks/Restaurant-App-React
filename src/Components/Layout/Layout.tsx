import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default Layout;
