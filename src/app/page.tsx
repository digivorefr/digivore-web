import Iris from "@/components/effects/Iris";
import StaggedFade from "@/components/effects/StaggedFade";
import { TextEffect } from "@/components/effects/TextEffect";
import Pill from "@/components/ui/Pill";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container grid gap-16 justify-center text-center">
      <Iris>
        <Image
          priority
          src="/img/digivore.webp"
          alt="Digivore"
          width={180}
          height={180}
          className="z-0"
        />
      </Iris>
      <div className="grid gap-8">
        <h1 className="text-h1/[1.05] font-extrabold">
          <TextEffect delay={0.2}>Hey, I'm a Senior</TextEffect>
          <TextEffect className="text-accent" delay={0.75}>Frontend Developer</TextEffect>
        </h1>
        <StaggedFade className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-2">
          <Pill custom={{delay: 2.5}} bg="bg-radial-[at_50%_75%] from-gray-600 to-gray-700" fg="text-gray-200" isOrchestrated>Next.js</Pill>
          <Pill custom={{delay: 1.5}} bg="bg-radial-[at_25%_25%] from-sky-600 to-sky-700" fg="text-blue-200" isOrchestrated>React</Pill>
          <Pill custom={{delay: 2.1}} bg="bg-radial-[at_25%_25%] from-cyan-600 to-cyan-700" fg="text-cyan-200" isOrchestrated>TypeScript</Pill>
          <Pill custom={{delay: 1.7}} bg="bg-radial-[at_50%_75%] from-yellow-600 to-yellow-700" fg="text-yellow-200" isOrchestrated>Motion</Pill>
          <Pill custom={{delay: 2.3}} bg="bg-radial-[at_25%_25%] from-purple-600 to-purple-700" fg="text-purple-200" isOrchestrated>Tailwind</Pill>
          <Pill custom={{delay: 1.9}} bg="bg-radial-[at_50%_75%] from-green-600 to-green-700" fg="text-green-200" isOrchestrated>Node.js</Pill>
        </StaggedFade>
        <StaggedFade custom={{delay: 2.2}}>
          <p className="text-xs font-semibold">
            Based in Toulouse, France
          </p>
        </StaggedFade>
      </div>
    </div>
  );
}
