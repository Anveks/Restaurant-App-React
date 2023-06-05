import { Route, Routes } from "react-router-dom";
import Menu from "../../Body/Menu/Menu";
import Home from "../../Home/Home";
import About from "../../About/About";
import ContactUs from "../../ContactUs/ContactUs";

function Routing(): JSX.Element {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      {/* <Route path="*" element={<PageNotFound />} /> */}

      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contactUs" element={<ContactUs />}></Route>
    </Routes>
  );
}

export default Routing;
