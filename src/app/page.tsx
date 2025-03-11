import Iris from "@/components/effects/Iris";
import StaggedFade from "@/components/effects/StaggedFade";
import { TextEffect } from "@/components/effects/TextEffect";
import Pill from "@/components/ui/Pill";
import Portrait from "@/components/ui/Portrait";
import Spacer from "@/components/ui/Spacer";
import Image from "next/image";

const pillDelay = 5;

export default function Home() {
  return (
    <div className="relative">
      <div className="container grid sm:flex gap-16 justify-start items-start text-left mt-24">
        <Portrait
          src="/img/digivore.webp"
          alt="Digivore"
          width={180}
          height={180}
          className="flex-none mr-auto sm:mr-0 sticky top-24 shadow-neumorphic bg-background-lighten z-0"
          delay={2.1}
        />
        <div className="flex-auto grid gap-8 pt-5 bg-background-base z-10">
          <h1 className="text-h1/[1.05] font-extrabold">
            <TextEffect delay={0.2} speedReveal={0.6}>Hey, I'm a Senior</TextEffect>
            <TextEffect className="text-accent" delay={0.95} speedReveal={0.6}>Frontend Developer</TextEffect>
          </h1>
          <TextEffect delay={3.2} className="text-sm font-bold px-1">Based in Toulouse, France</TextEffect>
          <StaggedFade className="flex flex-wrap justify-start items-center gap-6">
            <Pill custom={{ delay: pillDelay + 0.95 }} isOrchestrated>Team player</Pill>
            <Pill custom={{ delay: pillDelay + 0.3 }} isOrchestrated>Creative</Pill>
            <Pill custom={{ delay: pillDelay }} isOrchestrated>Autonomous</Pill>
            <Pill custom={{ delay: pillDelay + 0.65 }} isOrchestrated>Dedicated</Pill>
            <Pill custom={{ delay: pillDelay + 0.8 }} isOrchestrated>Curious</Pill>
            <Pill custom={{ delay: pillDelay + 0.5 }} isOrchestrated>Fast learner</Pill>
          </StaggedFade>
        </div>
      </div>
      <Spacer />
    </div>
  );
}
