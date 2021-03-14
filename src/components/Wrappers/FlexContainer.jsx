import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  max-width: 100rem;
  margin: 0 auto;
  align-items: center;
  justify-content: ${(props) => props.center && "center"};
  flex-direction: ${(props) => props.column && "column"};
`;
const FlexContainer = ({ children, center, column }) => {
  return (
    <Flex column={column} center={center}>
      {children}
    </Flex>
  );
};

export default FlexContainer;
