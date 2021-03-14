import React from "react";
import AppWrapper from "../Wrappers/AppWrapper";
import FlexContainer from "../Wrappers/FlexContainer";
import Spacer from "../Utils/Spacer";
import PricingCard from "./PricingCard";
import Cards from "./Cards";
const SectionPricing = () => {
  return (
    <AppWrapper>
      <Spacer size={15} />
      <FlexContainer center>
        <Cards />
      </FlexContainer>
      <Spacer size={15} />
    </AppWrapper>
  );
};

export default SectionPricing;
