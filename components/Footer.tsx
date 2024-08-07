import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-[80rem] flex-col gap-10 px-6 pt-20 md:px-8 lg:pt-24 xl:pb-2">
      <div className="flex flex-col items-center gap-10 text-center md:flex-row md:justify-between md:gap-4 md:text-left">
        <div className="flex flex-col gap-4">
          <a
            className="flex items-center justify-center gap-2 md:justify-start"
            href="/"
          >
            <Image src={"/mascot.svg"} alt={"mascot"} width={25} height={25} />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Billicious
            </span>
          </a>
          <p className="max-w-xs">
            Simplify expenses with our app—quick, easy, and stress-free bill
            splitting.
          </p>
        </div>
        <div className="flex gap-12">
          <div>
            <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">
              Community
            </h2>
            <ul className="grid gap-2">
              <li>
                <a
                  className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                  href="https://t.me/lulu786"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                  href="https://github.com/Alchemist-Alliance"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">
              Legal
            </h2>
            <ul className="grid gap-2">
              <li>
                <a
                  className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                  href="/terms"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                  href="/privacy"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-5 rounded-md py-4 md:flex-row">
        <div className="flex space-x-5 sm:mt-0 sm:justify-center">
          <a
            className="fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
            href="https://t.me/lulu786"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
                d="M39.175 10.016c1.687 0 2.131 1.276 1.632 4.272-.571 3.426-2.216 14.769-3.528 21.83-.502 2.702-1.407 3.867-2.724 3.867-.724 0-1.572-.352-2.546-.995-1.32-.872-7.984-5.279-9.431-6.314-1.32-.943-3.141-2.078-.857-4.312.813-.796 6.14-5.883 10.29-9.842.443-.423.072-1.068-.42-1.068a.625.625 0 0 0-.347.111c-5.594 3.71-13.351 8.859-14.338 9.53-.987.67-1.949 1.1-3.231 1.1-.655 0-1.394-.112-2.263-.362-1.943-.558-3.84-1.223-4.579-1.477-2.845-.976-2.17-2.241.593-3.457 11.078-4.873 25.413-10.815 27.392-11.637 1.928-.801 3.36-1.246 4.357-1.246m0-3c-1.368 0-3.015.441-5.506 1.474l-.299.124C22.735 13.03 13.092 17.128 6.218 20.152c-1.074.473-4.341 1.91-4.214 4.916.054 1.297.768 3.065 3.856 4.124l.228.078c.862.297 2.657.916 4.497 1.445 1.12.322 2.132.478 3.091.478a8.041 8.041 0 0 0 3.961-1.028 4.78 4.78 0 0 0 .012.507c.182 2.312 1.97 3.58 3.038 4.338l.149.106c1.577 1.128 8.714 5.843 9.522 6.376 1.521 1.004 2.894 1.491 4.199 1.491 2.052 0 4.703-1.096 5.673-6.318.921-4.953 1.985-11.872 2.762-16.924.331-2.156.603-3.924.776-4.961.349-2.094.509-4.466-.948-6.185-.612-.72-1.74-1.579-3.645-1.579z"
              />
            </svg>
            <span className="sr-only">Telegram</span>
          </a>
          <a
            className="fill-muted-foreground text-muted-foreground hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
            href="https://github.com/Alchemist-Alliance"
          >
            <GitHubLogoIcon />
            <span className="sr-only">Github</span>
          </a>
        </div>
        <span className="flex items-center gap-[0.3rem] text-sm text-muted-foreground">
          Made with <Heart fill="#bf616a" strokeWidth={0} className="h-4 w-4" />{" "}
          in India
        </span>
      </div>
    </footer>
  );
};

export default Footer;
