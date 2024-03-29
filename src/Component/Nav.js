import React from "react";

const style = {
    navStyle: {
        width: "33%",
        textAlign: "center"
    }
}

function Nav(props) {
    return(
        <nav className="navbar navbar-light bg-light mb-5">
            <span style={style.navStyle}>Clicky Game</span>
            <span style={style.navStyle}>{props.message}</span>
            <span style={style.navStyle}>Score: {props.score} | Top Score: {props.topScore}</span>
        </nav>
    );
}

export default Nav;