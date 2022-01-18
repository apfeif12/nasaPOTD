import React from "react";
import styled from "styled-components";


const StyledTitle = styled.h2`
  color: ${pr => pr.theme.primaryColor};
  font-weight: bold;
  font-size: 50px;
`;
const Text = styled.h2`
  color: white;
`;
export default function Title(props) {
  const { planetData } = props;
  return (
    <StyledTitle>
      Todays Image is:
      <Text>{planetData.title}</Text>
    </StyledTitle>
  );
}
