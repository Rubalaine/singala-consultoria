import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 50%;
`;
const Ilustration = styled.img`
  width: 100%;
  padding:2rem;
`;
const IlustrationBox = ({ image, altext }) => {
  return (
    <Box>
      <Ilustration src={image} alt={altext} />
    </Box>
  );
};

export default IlustrationBox;
