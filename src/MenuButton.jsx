import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MenuButton = (props) => {
  return (
    <div onClick={props.handleClick}>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
};

export default MenuButton;
