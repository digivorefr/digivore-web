import Orchestrator, { OrchestratorVariants } from "@/components/effects/Orchestrator";
import StaggedFade from "@/components/effects/StaggedFade";
import { TextEffect } from "@/components/effects/TextEffect";
import Hero from "@/components/ui/Hero/Hero";
import Pill from "@/components/ui/Pill/Pill";
import Portrait from "@/components/ui/Portrait";
import Spacer from "@/components/ui/Spacer/Spacer";


const spacerVariants: OrchestratorVariants = {
  hidden: {
    y: -30,
    opacity: 0,
    scaleY: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 1,
      delay: 1.25,
      when: 'beforeChildren',
    },
  },
  exit: {
    y: 30,
    opacity: 0,
    scaleY: 0,
  },
}

export default function Home() {
  return (
    <div className="relative">
      <Hero
        imageUrl="/img/hero.webp"
        title="Digivore"
      />
      <div className="container grid gap-16 justify-center items-center text-center mt-24">
        <Orchestrator options={{once: true}} className="flex-auto grid gap-8 pt-5 bg-background-base z-10">
          <h1 className="text-h1/[1.05] font-extrabold">
            <TextEffect isOrchestrated delay={0.2} speedReveal={1}>Crafting digital experiences</TextEffect>
            <TextEffect className="text-accent" isOrchestrated delay={0.95} speedReveal={1}>with code and creativity</TextEffect>
          </h1>
          <TextEffect isOrchestrated delay={2.2} className="text-lg font-bold px-1">Senior Frontend Developer, Toulouse, France</TextEffect>
          <Portrait
            src="/img/digivore.webp"
            alt="Digivore"
            width={180}
            height={180}
            className="mx-auto shadow-neumorphic bg-background-lighten z-0"
            delay={0.25}
          />
          <StaggedFade
            isOrchestrated
            className="flex flex-wrap justify-center items-center gap-6"
            custom={{ delay: 1.9 }}
          >
            <Pill isOrchestrated className="order-3">Autonomous</Pill>
            <Pill isOrchestrated className="order-2">Creative</Pill>
            <Pill isOrchestrated className="order-6">Fast learner</Pill>
            <Pill isOrchestrated className="order-4">Dedicated</Pill>
            <Pill isOrchestrated className="order-5">Curious</Pill>
            <Pill isOrchestrated className="order-1">Team player</Pill>

          </StaggedFade>
        </Orchestrator>
      </div>
      <Orchestrator
        options={{ once: true }}
        key="spacer"
        variants={spacerVariants}
        className="container"
      >
        <Spacer />
      </Orchestrator>
    </div>
  );
}
