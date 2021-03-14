import React from "react";
import styled from "styled-components";
import { FaLayerGroup } from "react-icons/fa";
import Spacer from "../Utils/Spacer";
import Button from "../Buttons";
const Card = styled.div`
  transform: ${(props) => props.altern && "scale(1.125)"};
  padding: 6rem 2rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.altern ? "#000000" : "#2161fb")};
  border-radius: 5px;
  font-size: 1.7rem;
  color: white;
  backface-visibility: hidden;
  transition: transform 0.3s;
  &:hover {
    transform: ${(props) => (props.altern ? "scale(1.140)" : "scale(1.025)")};
  }
`;
const Icon = styled.i`
  font-size: 4rem;
  color: white;
`;
const Name = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-transform: capitalize;
`;
const Price = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;
const Option = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;
const PricingCard = ({ name, price, options, altern }) => {
  return (
    <Card altern={altern}>
      <Icon>
        <FaLayerGroup />
      </Icon>
      <Spacer />
      <Name>{name}</Name>

      <Price>{price}MT</Price>
      <Option>por mês</Option>
      <Spacer size={3} />
      {options.map((el, index) => (
        <Option key={index}>{el}</Option>
      ))}
      <Spacer size={3} />
      <Button altern={!altern} to='/'>comprar</Button>
    </Card>
  );
};

export default PricingCard;
