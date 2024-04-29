import "./NavBar.css";
import { FaHome } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="home">
        <FaHome className="icon active" />
        <span className="active">Home</span>
      </div>
      <div className="shop">
        <FaStore className="icon" />
        <span>Store</span>
      </div>
    </div>
  );
};

export default NavBar;
