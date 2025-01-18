import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { BrainCircuit, Lock, TrendingUp, LayoutDashboard } from "lucide-react";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import FlickeringGrid from "./ui/flikering-grid";
import GridPattern from "./ui/grid-pattern";
import Meteors from "./ui/meteros";
import RetroGrid from "./ui/retro-grid";

const features = [
  {
    Icon: BrainCircuit,
    name: "AI-Based Operation Panel",
    description: "Leverage AI-powered tools for streamlined operation and enhanced decision-making.",
    className: "col-span-3 lg:col-span-1",
    background: <RetroGrid />,
  },
  {
    Icon: Lock,
    name: "Secure Wallet Management Functions",
    description: "Ensure secure transactions and automated wallet funding with advanced encryption.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
    ),
  },
  {
    Icon: TrendingUp,
    name: "Advanced Pump.fun Bundler System",
    description: "Optimize bundling operations while supporting multiple currencies and global compatibility.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    ),
  },
  {
    Icon: LayoutDashboard,
    name: "Dynamic Dashboard Interface",
    description: "Access a cutting-edge dashboard with real-time analytics and customizable widgets.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div>
        <Meteors number={30} />
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
    ),
  },
];


export function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-[80rem] px-6 py-24 text-center text-muted-foreground sm:py-32 md:px-8"
    >
      <div className="mx-auto mb-12 flex max-w-5xl flex-col items-center justify-center gap-3 text-center lg:flex-row lg:items-end">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
          What's in PumpVolt?
        </h1>
        <p className="text-xl leading-8 text-muted-foreground">
          Everything you need to know to launch on Pump.fun
        </p>
      </div>

      <BentoGrid className="lg:grid-rows-2">
        {features.map((feature) => (
          <BentoCard 
            key={feature.name} 
            {...feature} 
            className={`${feature.className} cursor-default`} // Prevent pointer cursor
          />
        ))}
      </BentoGrid>
    </section>
  );
}
