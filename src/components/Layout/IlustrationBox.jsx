import React from "react";
import styled, { keyframes } from "styled-components";
const comeFromRight = keyframes`
    from{
      transform: translateX(250px) rotate(9deg);
      opacity: 0;
    }
    to{
      transform: translateX(0) rotate(0);
      opacity: 1;
    }
`;
const Box = styled.div`
  width: 50%;
  animation: ${comeFromRight} 1.2s ease-in-out;
`;
const Ilustration = styled.img`
  width: 100%;
  padding: 2rem;
`;
const IlustrationBox = ({ image, altext }) => {
  return (
    <Box>
      <Ilustration src={image} alt={altext} loading="lazy" />
    </Box>
  );
};

export default IlustrationBox;
