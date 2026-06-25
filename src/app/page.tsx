import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
import { MissionIntro } from "@/components/home/MissionIntro";
import { Programs } from "@/components/home/Programs";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { Stories } from "@/components/home/Stories";
import { GetInvolved } from "@/components/home/GetInvolved";
import { NewsSection } from "@/components/home/NewsSection";
import { Partners } from "@/components/home/Partners";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <MissionIntro />
      <Programs />
      <WhoWeServe />
      <Stories />
      <GetInvolved />
      <NewsSection />
      <Partners />
    </>
  );
}
