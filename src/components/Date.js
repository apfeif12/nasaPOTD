import React from "react";
import styled from "styled-components";

const StyledDate = styled.h1`
  color: white;
  font-weight: bold;
  font-size:30px;
`;
export default function Date(props) {
  const { planetData } = props;
  return (
    <StyledDate>
      NASA IMAGE OF THE DAY FOR {planetData.date}
      <span role="img" aria-label="go!">
        🚀
      </span>
      !
    </StyledDate>
  );
}
