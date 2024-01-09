import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="md flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <img
            src={logo}
            className="h-[60px] w-[50px] mt-2"
            onClick={handleLogoClick}
          />
          <h1 className="text-4xl font-bold text-center font-body">
            Kattas Teknologiske Treningssenter
          </h1>
        </div>
      </div>
      <hr className="w-full mt-2 border-2 border-light-green"></hr>
    </>
  );
};
export default Navbar;
