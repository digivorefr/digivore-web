import StaggedFade from "@/components/effects/StaggedFade";
import { TextEffect } from "@/components/effects/TextEffect";
import Hero from "@/components/ui/Hero/Hero";
import Pill from "@/components/ui/Pill/Pill";
import Portrait from "@/components/ui/Portrait";
import Spacer from "@/components/ui/Spacer/Spacer";

const pillDelay = 3;

export default function Home() {
  return (
    <div className="relative">
      <Hero
        imageUrl="/img/hero.webp"
        title="Digivore"
      />
      <div className="container grid gap-16 justify-center items-center text-center mt-24">
        <Portrait
          src="/img/digivore.webp"
          alt="Digivore"
          width={180}
          height={180}
          className="mx-auto shadow-neumorphic bg-background-lighten z-0"
          delay={2.1}
        />
        <div className="flex-auto grid gap-8 pt-5 bg-background-base z-10">
          <h1 className="text-h1/[1.05] font-extrabold">
            <TextEffect useViewport delay={0.2} speedReveal={0.5}>Crafting digital experiences</TextEffect>
            <TextEffect className="text-accent" useViewport delay={0.95} speedReveal={0.5}>with code and creativity</TextEffect>
          </h1>
          <TextEffect useViewport delay={2.2} className="text-lg font-bold px-1">Senior Frontend Developer, Toulouse, France</TextEffect>
          <StaggedFade className="flex flex-wrap justify-center items-center gap-6">
            <Pill custom={{ delay: pillDelay + 0.95 }}>Team player</Pill>
            <Pill custom={{ delay: pillDelay + 0.3 }}>Creative</Pill>
            <Pill custom={{ delay: pillDelay }}>Autonomous</Pill>
            <Pill custom={{ delay: pillDelay + 0.65 }}>Dedicated</Pill>
            <Pill custom={{ delay: pillDelay + 0.8 }}>Curious</Pill>
            <Pill custom={{ delay: pillDelay + 0.5 }}>Fast learner</Pill>
          </StaggedFade>
        </div>
      </div>
      <div className="container">
        <Spacer delay={2.2} />
      </div>
    </div>
  );
}
