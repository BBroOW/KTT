import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen h-full">
      <Navbar />
      <div className="h-fit">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
