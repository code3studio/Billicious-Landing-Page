"use client";

import { generateRandomPolygonPath } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatedBeamMultipleOutput } from "./AnimatedBeamMultipleOutput";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { Button } from "./ui/button";

const Hero = () => {
  const { theme } = useTheme();
  const [polygonPath, setPolygonPath] = useState(
    "1.93716% 20.7686%, 35.5488% 41.4208%, 55.0957% 35.5006%, 24.6226% 44.8119%, 71.0606% 63.4242%, 74.4139% 61.7434%, 70.1957% 61.5357%, 34.8165% 65.0704%, 31.6652% 72.6421%, 60.0481% 28.8503%, -8.55071% 67.7025%, 59.0976% 87.9395%, 84.2295% 14.6248%, 40.8987% 48.0481%, 3.04948% 51.441%, 102.961% 52.8397%",
  );
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
          className="animated-path aspect-[1.7] h-full w-full bg-gradient-to-r from-primary to-white/10 opacity-90 md:opacity-60 lg:opacity-30"
          style={{
            clipPath: `polygon(${polygonPath})`,
          }}
        ></div>
      </div>
      <div className="z-50 mx-auto max-w-[80rem] px-6 py-24 sm:py-32 md:px-8 md:py-40">
        {/* <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-border" />{" "}
          <span className="inline animate-gradient bg-gradient-to-r from-primary via-complementary to-primary bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
            Introducing Billicious
          </span>
        </AnimatedGradientText> */}
        <Link
          href="https://www.producthunt.com/posts/billicious?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-billicious"
          target="_blank"
          className="flex items-center justify-center"
        >
          <Image
            src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=694333&theme=${theme === "system" || theme === undefined ? "neutral" : theme}`}
            alt="Billicious - Simplify&#0032;group&#0032;expense&#0032;splitting | Product Hunt"
            width={250}
            height={54}
            className="scale-75"
          />
        </Link>
        <h1 className="translate-y-[-1rem] animate-fade-in text-balance bg-gradient-315 from-complementary to-primary bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-complementary dark:to-primary md:text-7xl lg:text-8xl">
          Split Bills Seamlessly, Anywhere, Anytime.
        </h1>
        <p className="mb-12 translate-y-[-1rem] animate-fade-in text-balance text-lg tracking-tight text-muted-foreground opacity-0 [--animation-delay:400ms] md:text-xl">
          Simplify expenses with our app—quick, easy, and stress-free bill
          splitting.
        </p>
        <Button asChild>
          <Link
            href={process.env.NEXT_PUBLIC_APP_DOMAIN!}
            className="flex items-center"
          >
            Get Started for free <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        {/* <AnimatedBeamMultipleOutput /> */}
      </div>
    </section>
  );
};

export default Hero;
