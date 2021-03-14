import React from "react";
import styled from "styled-components";
const Btn = styled.a`
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: ${(props) => (props.altern ? "#000000" : "#2161fb")};
  font-size: 1.7rem;
  font-weight: 500;
  width: 20rem;
  padding: 1.3rem 0;
  text-align: center;
  border-radius: 5px;
`;
const Button = ({ children, to, altern }) => {
  return (
    <Btn href={to} altern={altern}>
      {children}
    </Btn>
  );
};

export default Button;
