import React from "react";
import styled from "styled-components";

const StyledBuild = styled.h4`
  color: white;
`;
export default function Build(props) {
  const { planetData } = props;
  return <StyledBuild>Build: {planetData.service_version}</StyledBuild>;
}
