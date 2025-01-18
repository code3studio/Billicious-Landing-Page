import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href?: string; // Optional
  cta?: string;  // Optional
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex h-[20rem] transform-gpu flex-col justify-between overflow-hidden rounded-xl border-2 border-muted dark:bg-background",
      className,
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col items-start justify-start gap-1 p-6 text-left transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-muted-foreground transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-secondary-foreground">
        {name}
      </h3>
      <p className="max-w-lg text-muted-foreground">{description}</p>
    </div>

    {href && cta && ( // Only render this if `href` and `cta` are provided
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 z-[2] flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <Button
          variant="ghost"
          asChild
          size="sm"
          className="pointer-events-auto"
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    )}
    <div className="absolute inset-0 bottom-[-15rem] bg-gradient-to-t from-white to-transparent to-90% group-hover:bottom-[-10rem] dark:from-black" />
  </div>
);


export { BentoCard, BentoGrid };
