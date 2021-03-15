import React from "react";
import AppWrapper from "../Wrappers/AppWrapper";
import FlexContainer from "../Wrappers/FlexContainer";
import IlustrationBox from "./IlustrationBox";
import TextBox from "./TextBox";
import ilustration from "./../../assets/ilustration1.svg";
import Spacer from "../Utils/Spacer";
import Companies from "./Companies";
import Title from "../Typography/Title";
const SectionIndex = () => {
  return (
    <AppWrapper>
      <Spacer size={2} />

      <FlexContainer altern>
        <TextBox
          sub="consultoria exclusiva"
          title="Garantimos segurança ao seu negócio"
          paragraph="Tenha acesso as melhores ferramentas de cyber-seguranća existestes
            no mercado, com o acompanhamento dos melhores profissionais da área
            em Mocambique"
          btn="iniciar"
        />
        <IlustrationBox
          image={ilustration}
          altext="ilustracao de um computador"
        />
      </FlexContainer>
      <Spacer size={3} />
      <FlexContainer center column>
        <Title>empresas que confiam nos nossos servicos</Title>
        <Spacer size={3} />
        <Companies />
      </FlexContainer>
      <Spacer size={8} />
    </AppWrapper>
  );
};

export default SectionIndex;
