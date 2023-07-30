import React from "react";

function Aside({ dogs }) {
  return (
    <aside>
      <h3>Roster:</h3>
      <ol>{dogs.map((dog) => (dog.present ? <li>{dog.name}</li> : null))}</ol>
    </aside>
  );
}

export default Aside;
