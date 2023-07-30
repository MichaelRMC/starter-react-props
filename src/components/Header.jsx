import React from "react";

function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
      <h2>{props.todaysDate}</h2>
    </header>
  );
}

export default Header;
