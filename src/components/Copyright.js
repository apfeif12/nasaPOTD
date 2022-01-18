import React from "react";
import styled from "styled-components";

const StyledCopyright = styled.h4`
  color: white;
`;
export default function Copyright(props) {
  const { planetData } = props;
  return <StyledCopyright>Copyright: {planetData.copyright}</StyledCopyright>;
}
