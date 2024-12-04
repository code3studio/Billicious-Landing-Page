import Mascot from "@/components/ui/mascot";
import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaTelegram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-[80rem] flex-col gap-10 px-6 pt-20 md:px-8 lg:pt-24 xl:pb-2">
      <div className="flex flex-col items-center gap-10 text-center md:flex-row md:justify-between md:gap-4 md:text-left">
        <div className="flex flex-col gap-4">
          <Link
            className="flex items-center justify-center gap-2 md:justify-start"
            href="/"
          >
            <Mascot className="hidden h-8 cursor-pointer md:block" />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Billicious
            </span>
          </Link>
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
                <Link
                  className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                  href="https://t.me/lulu786"
                >
                  Telegram
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                  href="https://github.com/Alchemist-Alliance"
                >
                  Github
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">
              Legal
            </h2>
            <ul className="grid gap-2">
              <li>
                <Link
                  className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                  href="/terms"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                  href="/privacy"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-5 rounded-md py-4 md:flex-row">
        <div className="flex space-x-3 sm:mt-0 sm:justify-center">
          <Link
            className="fill-muted-foreground text-muted-foreground hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
            href="https://t.me/lulu786"
          >
            <FaTelegram className="size-6" />
            <span className="sr-only">Telegram</span>
          </Link>
          <Link
            className="fill-muted-foreground text-muted-foreground hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
            href="https://github.com/Alchemist-Alliance/Billicious"
          >
            <FaGithub className="size-6" />
            <span className="sr-only">Github</span>
          </Link>
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
