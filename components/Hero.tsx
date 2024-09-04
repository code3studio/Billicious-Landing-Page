"use client";

import { cn, generateRandomPolygonPath } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { Button } from "./ui/button";

const Hero = () => {
  const [polygonPath, setPolygonPath] = useState(generateRandomPolygonPath());
  useEffect(() => {
    const pathTimer = setTimeout(
      () => setPolygonPath(generateRandomPolygonPath()),
      2e3 + Math.random() * 1e3,
    );
    return () => {
      clearTimeout(pathTimer);
    };
  }, [polygonPath]);

  return (
    <section id="hero" className="relative text-center">
      <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          className="animated-path aspect-[1.7] h-full w-full bg-gradient-to-r from-primary to-white/10 opacity-70 lg:opacity-50"
          style={{
            clipPath: `polygon(${polygonPath})`,
          }}
        ></div>
      </div>
      <div className="z-50 mx-auto max-w-[80rem] px-6 py-24 sm:py-32 md:px-8 md:py-40">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-border" />{" "}
          <span className="animate-gradient inline bg-gradient-to-r from-primary via-complementary to-primary bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
            Introducing Billicious
          </span>
        </AnimatedGradientText>
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
      </div>
    </section>
  );
};

export default Hero;
