import LogoIcon from "@/assets/logo.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-6 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <LogoIcon className="size-9 text-[#EC6F00]" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">
        {description}
      </p>
    </div>
  );
};
