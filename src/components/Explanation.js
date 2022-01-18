import React from "react";
import styled from "styled-components";

const StyledExplanation = styled.h3`
  color: white;
  padding-left: 16%;
  padding-right: 16%;
`;
export default function Explanation(props) {
  const { planetData } = props;
  return <StyledExplanation>{planetData.explanation}</StyledExplanation>;
}
