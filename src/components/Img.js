import React from "react";

export default function Img(props) {
  const { planetData } = props;
  return (
    <div>
      <img src={planetData.url} alt="low res pic of the day"></img>
    </div>
  );
}
