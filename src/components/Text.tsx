import { twMerge } from "tailwind-merge";

export const Text = ({
  title,
  colorTitle,
  description,
  className,
}: {
  title?: string;
  colorTitle?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <>
      {colorTitle && (
        <p
          className={twMerge(
            `text-lg md:text-xl lg:text-2xl font-semibold  tracking-widest bg-gradient-to-r from-[#FFB16D] to-[#EC6F00] bg-clip-text text-transparent mt-4`,
            className
          )}
        >
          {colorTitle}
        </p>
      )}
      {title && (
        <h2
          className={twMerge(
            `text-3xl md:text-5xl lg:text-6xl font-extrabold font-serif mt-4`,
            className
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={twMerge(
            `font-sans md:text-lg lg:text-xl text-white/60 mt-4`,
            className
          )}
        >
          {description}
        </p>
      )}
    </>
  );
};
