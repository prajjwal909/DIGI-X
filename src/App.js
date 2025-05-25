  import React ,{useEffect} from "react";

  import Home from "./components/Home/Home/Home";
  import OurProtfolio from "./components/OurProtfolio/OurProtfolio";
  import Contact from "./components/Contact/Contact";
  import Login from "./components/Login/Login/Login";
  import SingUp from "./components/Login/SignUp/SingUp";
  import Navbar from "./components/Shared/Navbar/Navbar";
  import OurTeam from "./components/OurTeam/OurTeam";
  import Footer from "./components/Shared/Footer/Footer";
  // import PrivateRoute from "./PrivateRoute";
import { Route, Routes, useLocation } from "react-router-dom";
  const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
  const App = () => {
    return (
      <div>
        <Navbar></Navbar>
          <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/Services"
            element={
              // <PrivateRoute>
                <OurProtfolio></OurProtfolio>
              // </PrivateRoute>
            }
          ></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          {/* <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SingUp></SingUp>}></Route> */}
          <Route
            path="/team"
            element={
              // <PrivateRoute>
                <OurTeam></OurTeam>
              // </PrivateRoute>
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </div>
    );
  };

  export default App;
