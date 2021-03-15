import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  max-width: 100rem;
  margin: 0 auto;
  align-items: center;
  justify-content: ${(props) => props.center && "center"};
  flex-direction: ${(props) => props.column && "column"};
  @media screen and (max-width: 640px) {
    flex-direction: ${(props) => (props.altern ? "column-reverse" : "column")};
  }
`;
const FlexContainer = ({ children, center, column, altern }) => {
  return (
    <Flex column={column} center={center} altern={altern}>
      {children}
    </Flex>
  );
};

export default FlexContainer;
