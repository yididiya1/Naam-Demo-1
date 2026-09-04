import { Hero } from "@/components/home/Hero";
import { HaitianStatement } from "@/components/home/HaitianStatement";
import { StatsBand } from "@/components/home/StatsBand";
import { Programs } from "@/components/home/Programs";
import { Stories } from "@/components/home/Stories";
import { Partners } from "@/components/home/Partners";

export default function Home() {
  return (
    <>
      <Hero />
      <HaitianStatement />
      <StatsBand />
      <Programs />
      <Stories />
      <Partners />
    </>
  );
}
