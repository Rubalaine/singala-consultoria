import React from "react";
import styled from "styled-components";
import Button from "../Buttons";
import Spacer from "../Utils/Spacer";

const Box = styled.div`
  width: 50%;
`;
const Sub = styled.h3`
  font-size: 1.7rem;
  font-weight: 500;
  color: #eb3656;
  text-transform: uppercase;
`;
const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
  color: ${(props) => (props.altern ? "white" : "#1d3557")};
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;
const Paragraph = styled.p`
  font-size: 1.7rem;
  font-weight: 500;
  color: ${(props) => (props.altern ? "#f5f5f5" : "#2e5184")};
`;
const TextBox = ({ sub, title, paragraph, btn, altern }) => {
  return (
    <Box>
      <Sub>{sub}</Sub>
      <Spacer />
      <Title altern={altern}>{title}</Title>
      <Spacer />
      <Paragraph altern={altern}>{paragraph}</Paragraph>
      <Spacer size={2} />
      <Button to="/">{btn}</Button>
    </Box>
  );
};

export default TextBox;
