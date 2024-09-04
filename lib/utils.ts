import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateRandomPolygonPath = () => {
  const coordinatePoints = new Array(16)
    .fill(0)
    .map(() => [Math.random(), Math.random()]);
  const randomize = (i: number) => {
    return Math.random() > 0.5 ? i + (Math.random() - 0.5) / 2 : Math.random();
  };
  for (let i = 0; i < coordinatePoints.length; i++)
    coordinatePoints[i] = [
      randomize(coordinatePoints[i][0]),
      randomize(coordinatePoints[i][1]),
    ];

  const polygonPath = coordinatePoints
    .map(([x, y]) => `${x * 100}% ${y * 100}%`)
    .join(", ");

  return polygonPath;
};
