import React from "react";
import styled from "styled-components";
import logo1 from "./../../assets/logo1.png";
import logo2 from "./../../assets/logo2.png";
import logo3 from "./../../assets/logo3.png";
import logo4 from "./../../assets/logo4.png";
import logo5 from "./../../assets/logo5.png";
import logo6 from "./../../assets/logo6.png";
import Company from "./Company";

const ImageList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
  }
`;
const logos = [
  { logo: logo1, text: "logo1" },
  { logo: logo2, text: "logo2" },
  { logo: logo3, text: "logo3" },
  { logo: logo4, text: "logo4" },
  { logo: logo5, text: "logo5" },
  { logo: logo6, text: "logo6" },
];
const Companies = () => {
  return (
    <ImageList>
      {logos.map((el, index) => (
        <Company key={index} image={el.logo} text={el.text} />
      ))}
    </ImageList>
  );
};

export default Companies;
