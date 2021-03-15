import React from "react";
import styled from "styled-components";
import PricingCard from "./PricingCard";
const List = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
const Cards = () => {
  return (
    <List>
      <PricingCard
        name="noob"
        price="1200"
        options={["até 50 funcionarios", "20 maquinas", "2 backups/més"]}
      />
      <PricingCard
        altern
        name="gold"
        price="1800"
        options={["até 75 funcionarios", "38 maquinas", "5 backups/més"]}
      />
      <PricingCard
        name="premium"
        price="2500"
        options={["até 120 funcionarios", "50 maquinas", "10 backups/més"]}
      />
    </List>
  );
};

export default Cards;
