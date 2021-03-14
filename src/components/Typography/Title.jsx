import React from "react";
import styled from "styled-components";

const Text = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  color: #1d3557;
  text-transform: uppercase;
`;
const Title = ({ children }) => <Text>{children}</Text>;

export default Title;
