import React from "react";
import Navigation from "../components/Layout/Navigation";
import Section from "../components/Layout/Section";
import SectionIndex from "../components/Layout/SectionIndex";
import SectionSoftware from "../components/Layout/SectionSoftware";
import SectionTreinamento from "../components/Layout/SectionTreinamento";

const Home = () => {
  return (
    <>
      <Section>
        <Navigation />
        <SectionIndex />
      </Section>
      <Section altern>
        <SectionTreinamento />
      </Section>
      <Section>
        <SectionSoftware />
      </Section>
      <Section altern></Section>
      <Section></Section>
    </>
  );
};

export default Home;