import React from "react";
import AppWrapper from "../Wrappers/AppWrapper";
import FlexContainer from "../Wrappers/FlexContainer";
import IlustrationBox from "./IlustrationBox";
import TextBox from "./TextBox";
import ilustration from "./../../assets/ilustration3.svg";
import Spacer from "../Utils/Spacer";
const SectionSoftware = () => {
  return (
    <AppWrapper>
      <Spacer size={15} />

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

      <Spacer size={15} />
    </AppWrapper>
  );
};

export default SectionSoftware;
