import "../style-sheets/Header.css";
import Icon from "../img/mdbIcon.png"

const Header = () => {
  return (
    <div className="header-container">
      <img className="icon" src={Icon} alt="mdb Icon" />
      <h1 className="title">The Movie DB</h1>
    </div>
  );
};

export default Header;
