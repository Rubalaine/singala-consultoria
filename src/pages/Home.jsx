import React, { lazy, Suspense } from "react";
import Navigation from "../components/Layout/Navigation";
import Section from "../components/Layout/Section";
import Spacer from "../components/Utils/Spacer";
const SectionIndex = lazy(() => import("../components/Layout/SectionIndex"));
const SectionPricing = lazy(() =>
  import("../components/Layout/SectionPricing")
);
const SectionSoftware = lazy(() =>
  import("../components/Layout/SectionSoftware")
);
const SectionTreinamento = lazy(() =>
  import("../components/Layout/SectionTreinamento")
);

const Home = () => {
  return (
    <>
      <Section>
        <Navigation />
        <Suspense fallback={<Spacer size={20} />}>
          <SectionIndex />
        </Suspense>
      </Section>
      <Section altern>
        <Suspense fallback={<Spacer size={20} />}>
          <SectionTreinamento />
        </Suspense>
      </Section>
      <Section>
        <Suspense fallback={<Spacer size={20} />}>
          <SectionSoftware />
        </Suspense>
      </Section>
      <Section altern>
        <Suspense fallback={<Spacer size={20} />}>
          <SectionPricing />
        </Suspense>
      </Section>
      <Section></Section>
    </>
  );
};

export default Home;
