import { cn } from "@/lib/utils";

const Mascot = ({ className }: { className?: string }) => {
  return (
    <img
      src="/PumpVolt.png"
      alt="Mascot"
      className={cn("w-auto", className)}
    />
  );
};

export default Mascot;
