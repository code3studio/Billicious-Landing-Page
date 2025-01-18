import { cn } from "@/lib/utils";

const Logo = ({ className }: { className: string }) => {
  return (
    <svg
      className={cn("w-auto fill-current", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
    >
      <text
        x="10"
        y="35"
        fontFamily="Trebuchet MS, sans-serif"
        fontSize="30"
        fill="currentColor"
      >
      
      </text>
    </svg>
  );
};

export default Logo;
