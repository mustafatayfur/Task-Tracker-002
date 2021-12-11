// import React from 'react';
import PropTypes from "prop-types";
import Button from "./Button";

export const Header = ({title = "Task Tracker"}) => {
const handleClick = ()=> {
    console.log("Click with handle click from header")
}

    return (
        <header className="header" >
            <h1>{title}</h1>
            <Button color="purple" text= "Show Add Task Bar" handleClickFromHeader={handleClick}/>
        </header>
    )
}

// default props
// Header.defaultProps = {
//     title: "Task Tracker",
// }

// Header.propTypes = {
//     title : PropTypes.string.isRequired,
// };

export default Header;
