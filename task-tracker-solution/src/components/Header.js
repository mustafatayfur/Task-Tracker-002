// import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title = "Task Tracker" }) => {
  const handleClick = () => {
    console.log("Click with handleClick from Header");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color="purple"
        text="Show Add Task Bar"
        handleClickFromHeader={handleClick}
      />
    </header>
  );
};

//DEFAULT PROPS
// Header.defaultProps = {
//   title: "Task Tracker",
// };

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Header;