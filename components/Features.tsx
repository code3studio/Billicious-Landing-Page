import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { Calculator, Globe, ReceiptText, Users } from "lucide-react";
import { AnimatedBeamMultipleOutput } from "./AnimatedBeamMultipleOutput";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import { BackgroundBeams } from "./ui/background-beams";
import DotPattern from "./ui/dot-pattern";
import GridPattern from "./ui/grid-pattern";
import Meteors from "./ui/meteros";
import RetroGrid from "./ui/retro-grid";

const features = [
  {
    Icon: ReceiptText,
    name: "Expense Tracking",
    description: "Keep track of all your shared expenses in one place.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <RetroGrid />,
  },
  {
    Icon: Calculator,
    name: "Automated Splitting",
    description:
      "Automatically calculate each person's share, including tips and taxes.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div>
        <BackgroundBeams className="absolute z-[2]" />
        <AnimatedBeamMultipleOutput className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      </div>
    ),
  },
  {
    Icon: Globe,
    name: "Multilingual",
    description: "Supports multiple Currencies.",
    href: "/",
    cta: "Learn more",
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
    Icon: Users,
    name: "Group Payments",
    description:
      "Easily collect payments from friends and family with integrated payment options.",
    href: "/",
    cta: "Learn more",
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
      className="mx-auto mt-28 max-w-[80rem] px-6 text-center text-muted-foreground md:px-8"
    >
      <div className="mx-auto mb-12 flex max-w-5xl flex-col items-center justify-center gap-3 text-center lg:flex-row lg:items-end">
        <h1 className="text-3xl font-semibold tracking-tight text-black text-secondary dark:text-white sm:text-4xl">
          What's in Billicious?
        </h1>
        <p className="text-xl leading-8 text-muted-foreground">
          Everything you need to do Bill Splitting.
        </p>
      </div>

      <BentoGrid className="lg:grid-rows-2">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
