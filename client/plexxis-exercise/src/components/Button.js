import React from "react";


export default function Button(props) {
  //possible props: title, color
  return (
    <button
      // className={props.className ? props.className : "btn"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <h4>{props.name}</h4>
    </button>
  );
}
