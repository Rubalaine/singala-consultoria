import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  display: ${(props) => (props.flex ? "flex" : "block")};
  height: ${(props) => props.h100 && "100%"};
`;
const AppWrapper = ({ children, flex, h100 }) => {
  return <Wrapper h100={h100} flex={flex}>{children}</Wrapper>;
};

export default AppWrapper;
