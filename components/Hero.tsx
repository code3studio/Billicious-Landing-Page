import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";
import { BorderBeam } from "./ui/border-beam";
import { Button } from "./ui/button";
import Particles from "./ui/particles";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative mx-auto mt-28 max-w-[80rem] px-6 text-center md:px-8"
    >
      <div className="backdrop-filter-[12px] group inline-flex h-7 translate-y-[-1rem] animate-fade-in items-center justify-between gap-1 rounded-full border border-white/5 bg-muted px-3 text-sm text-white opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-white/20 dark:text-black">
        <p
          style={{ "--shimmer-width": "100px" } as React.CSSProperties}
          className="mx-auto inline-flex max-w-md animate-shimmer items-center justify-center bg-gradient-to-r from-neutral-100 via-black/80 via-50% to-neutral-100 bg-clip-text bg-no-repeat text-neutral-600/50 [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] dark:from-neutral-900 dark:via-white/80 dark:to-neutral-900 dark:text-neutral-400/50"
        >
          <span className="text-xs md:text-sm">✨ Introducing Billicious</span>{" "}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </p>
      </div>
      <h1 className="translate-y-[-1rem] animate-fade-in text-balance bg-gradient-315 from-complementary to-primary bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-complementary dark:to-primary md:text-7xl lg:text-8xl">
        Split Bills Seamlessly, Anywhere, Anytime.
      </h1>
      <p className="mb-12 translate-y-[-1rem] animate-fade-in text-balance text-lg tracking-tight text-muted-foreground opacity-0 [--animation-delay:400ms] md:text-xl">
        Simplify expenses with our app—quick, easy, and stress-free bill
        splitting.
      </p>
      <Button>
        <a
          href="https://app.billicious.vercel.app"
          className="flex items-center"
        >
          Get Started for free <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
      <div className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
        <div className="rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:animate-image-glow before:opacity-0 before:[background-image:linear-gradient(to_bottom,#34d399,#34d399,transparent_40%)] before:[filter:blur(180px)]">
          <BorderBeam colorFrom="#34d399" colorTo="#647eff" />
          <img
            src="/hero-dark.png"
            alt="Hero Image"
            className="relative h-full w-full rounded-[inherit] border object-contain"
          />
        </div>
      </div>
      <Particles
        className="absolute inset-0 left-0 top-[-3rem] z-[-1] h-full w-full"
        staticity={80}
        ease={80}
        color="#34d399"
      />
    </section>
  );
};

export default Hero;
