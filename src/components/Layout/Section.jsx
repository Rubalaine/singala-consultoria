import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: ${(props) => (props.altern ? "#1D3557" : "white")};
`;
const Section = ({ altern, children }) => {
  return <StyledSection altern={altern}>{children}</StyledSection>;
};

export default Section;
