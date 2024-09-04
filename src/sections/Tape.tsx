import LogoIcon from "@/assets/logo.svg";
import { Fragment } from "react";

export const Tape = () => {
  const words = [
    "Frontend",
    "Backend",
    "Fullstack",
  ];
  return (
    <div className="py-16 lg:py-24 overflow-hidden">
      <div className="bg-gradient-to-r from-[#FFB16D] to-[#EC6F00] -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-6 pr-6 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(8)].map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex items-center gap-4">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <LogoIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
