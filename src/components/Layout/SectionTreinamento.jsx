import React from "react";
import AppWrapper from "../Wrappers/AppWrapper";
import FlexContainer from "../Wrappers/FlexContainer";
import IlustrationBox from "./IlustrationBox";
import TextBox from "./TextBox";
import ilustration from "./../../assets/ilustration2.svg";
import Spacer from "../Utils/Spacer";
const SectionTreinamento = () => {
  return (
    <AppWrapper>
      <Spacer size={15} />
      <FlexContainer center>
        <IlustrationBox
          image={ilustration}
          altext="ilustracao de um computador"
        />
        <TextBox
          sub="Treinamento"
          title="Treinamos os seus funcionários"
          paragraph="Treinamos os seu funcionarios para se protegerem dos ataques mais comuns aos mais sofisticados que existem para garantir a integridade e a seguranća da sua empresa"
          btn="iniciar agora"
          altern
        />
      </FlexContainer>
      <Spacer size={15} />
    </AppWrapper>
  );
};

export default SectionTreinamento;
