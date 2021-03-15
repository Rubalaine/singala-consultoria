import React, { lazy, Suspense } from "react";
import Navigation from "../components/Layout/Navigation";
import Section from "../components/Layout/Section";
// import SectionIndex from "../components/Layout/SectionIndex";
// import SectionPricing from "../components/Layout/SectionPricing";
// import SectionSoftware from "../components/Layout/SectionSoftware";
// import SectionTreinamento from "../components/Layout/SectionTreinamento";
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
        <Suspense fallback={<div>loading....</div>}>
          <SectionIndex />
        </Suspense>
      </Section>
      <Section altern>
        <Suspense fallback={<div>loading....</div>}>
          <SectionTreinamento />
        </Suspense>
      </Section>
      <Section>
        <Suspense fallback={<div>loading....</div>}>
          <SectionSoftware />
        </Suspense>
      </Section>
      <Section altern>
        <Suspense fallback={<div>loading....</div>}>
          <SectionPricing />
        </Suspense>
      </Section>
      <Section></Section>
    </>
  );
};

export default Home;
