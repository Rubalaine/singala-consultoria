import React from "react";
import styled from "styled-components";

const Image = styled.img`
  height: 6rem;
`;
const Company = ({ image, text }) => <Image src={image} alt={text} />;

export default Company;
