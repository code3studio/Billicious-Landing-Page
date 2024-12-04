"use client";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import Mascot from "@/components/ui/mascot";
import { cn } from "@/lib/utils";
import { IndianRupee, User } from "lucide-react";
import React, { forwardRef, useRef } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutput({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between gap-20">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <IndianRupee />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <Mascot className="size-[2.3rem]" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-10">
          <Circle ref={div1Ref}>
            <User />
          </Circle>
          <Circle ref={div2Ref}>
            <User />
          </Circle>
          <Circle ref={div3Ref}>
            <User />
          </Circle>
          <Circle ref={div4Ref}>
            <User />
          </Circle>
          <Circle ref={div5Ref}>
            <User />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        gradientStartColor="#34d399"
        gradientStopColor="#647eff"
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        curvature={-150}
        endYOffset={-10}
        // duration={5}
      />
      <AnimatedBeam
        gradientStartColor="#34d399"
        gradientStopColor="#647eff"
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        curvature={-100}
        endYOffset={-10}
        // duration={5}
      />
      <AnimatedBeam
        gradientStartColor="#34d399"
        gradientStopColor="#647eff"
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        endYOffset={-10}
        // duration={5}
      />
      <AnimatedBeam
        gradientStartColor="#34d399"
        gradientStopColor="#647eff"
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        curvature={100}
        endYOffset={-10}
        // duration={5}
      />
      <AnimatedBeam
        gradientStartColor="#34d399"
        gradientStopColor="#647eff"
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        curvature={150}
        endYOffset={-10}
        // duration={5}
      />
      <AnimatedBeam
        gradientStartColor="#34d399"
        gradientStopColor="#647eff"
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        endYOffset={10}
        // duration={5}
      />
    </div>
  );
}
