"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import React from "react";
import { BorderBeam } from "./ui/border-beam";
import { Button } from "./ui/button";
import Particles from "./ui/particles";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8"
    >
      <div className="backdrop-filter-[12px] group inline-flex h-7 translate-y-[-1rem] animate-fade-in items-center justify-between gap-1 rounded-full border border-white/5 bg-muted px-3 text-sm text-white opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-white/20 dark:text-black">
        <p
          style={{ "--shimmer-width": "100px" } as React.CSSProperties}
          className="mx-auto inline-flex max-w-md animate-shimmer items-center justify-center bg-gradient-to-r from-neutral-100 via-black/80 via-50% to-neutral-100 bg-clip-text bg-no-repeat text-neutral-600/50 [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] dark:from-neutral-900 dark:via-white/80 dark:to-neutral-900 dark:text-neutral-400/50"
        >
          <span className="text-xs md:text-sm">✨ Introducing Billicious</span>
        </p>
      </div>
      <h1 className="translate-y-[-1rem] animate-fade-in text-balance bg-gradient-315 from-complementary to-primary bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-complementary dark:to-primary md:text-7xl lg:text-8xl">
        Split Bills Seamlessly, Anywhere, Anytime.
      </h1>
      <p className="mb-12 translate-y-[-1rem] animate-fade-in text-balance text-lg tracking-tight text-muted-foreground opacity-0 [--animation-delay:400ms] md:text-xl">
        Simplify expenses with our app—quick, easy, and stress-free bill
        splitting.
      </p>
      <Button>
        <a
          href="https://app-billicious.vercel.app"
          className="flex items-center"
        >
          Get Started for free <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
      <div className="relative mt-[8rem] h-full w-full animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
        <div className="rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:animate-image-glow before:opacity-0 before:[background-image:linear-gradient(to_bottom,#34d399,#34d399,transparent_40%)] before:[filter:blur(180px)]">
          <BorderBeam colorFrom="#34d399" colorTo="#647eff" />
          <img
            src="/hero-dark.png"
            alt="Hero Image"
            className="relative hidden h-full w-full rounded-[inherit] border object-contain dark:block"
          />
          <img
            src="/hero-light.png"
            alt="Hero Image"
            className="relative block h-full w-full rounded-[inherit] border object-contain dark:hidden"
          />
        </div>
      </div>
      <Particles
        className="absolute inset-0 left-0 top-[-3rem] z-[-1] h-full w-full"
        ease={80}
        staticity={80}
        color={theme == "dark" || theme == "system" ? "#34d399" : "#111827"}
      />
    </section>
  );
};

export default Hero;
