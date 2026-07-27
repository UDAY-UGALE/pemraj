import { Hero } from "@/components/home/Hero";
import { IntroSplit } from "@/components/home/IntroSplit";
import { VisionMission } from "@/components/home/VisionMission";
import { CapabilitiesGrid } from "@/components/home/CapabilitiesGrid";
import { MachineryShowcase } from "@/components/home/MachineryShowcase";
import { IndustriesStrip } from "@/components/home/IndustriesStrip";
import { QualityStrip } from "@/components/home/QualityStrip";
// import { CtaBand } from "@/components/home/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSplit />
      <VisionMission />
      <CapabilitiesGrid />
      <MachineryShowcase />
      <IndustriesStrip />
      <QualityStrip />
      {/* <CtaBand /> */}
    </>
  );
}
