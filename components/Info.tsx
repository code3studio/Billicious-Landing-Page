"use client";

import { useState } from "react";

const Info = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("0xYourContractAddressHere");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-8 px-4 text-center transition-colors duration-300">
      <h2 className="text-2xl font-semibold">Current Build is a Live Demo</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Full dashboard access will be available to holders of $PumpVolt. To gain
        access, verify wallet ownership with a minimum holding of 2222 $PumpVolt.
      </p>
      <div className="mt-4">
        <button
          className="rounded-full border border-[#00c16b] px-8 py-2 text-sm font-semibold text-[#00c16b] transition-all hover:bg-[#00c16b] hover:text-white dark:hover:text-gray-900"
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "CA: Coming Soon"}
        </button>
      </div>
    </div>
  );
};

export default Info;
