import React from "react";
import ReactDOM from "react-dom";
//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

ReactDOM.render(
  <div>
    <h1>Recipe for Ground Meat Stew</h1>
    <ul>
      <li>ground beef</li>
      <li>green peppers</li>
      <li>celery</li>
      <li>onions</li>
      <li>rice</li>
    </ul>
  </div>,
  document.getElementById("root")
);
