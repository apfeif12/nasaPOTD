import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index.js";
import Date from "./components/Date";
import Title from "./components/Title";
import Img from "./components/Img";
import Explanation from "./components/Explanation";
import Copyright from "./components/Copyright";
import Build from "./components/Build";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: black;
`;

function App() {
  const [planetData, setPlanetData] = useState([]);
  useEffect(() => {
    const fetchPlanetData = () => {
      axios
        .get(`${BASE_URL}?api_key=${API_KEY}`)
        .then((res) => {
          setPlanetData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchPlanetData();
  }, []);

  return (
    <StyledDiv className="App">
      <Date planetData={planetData} />
      <Title planetData={planetData} />
      <Img planetData={planetData} />
      <Explanation planetData={planetData} />
      <Copyright planetData={planetData} />
      <Build planetData={planetData} />
    </StyledDiv>
  );
}

export default App;
