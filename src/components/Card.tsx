import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithRef<"div">) => { 
  return (
    <div
      className={twMerge(
        `bg-zinc-800 rounded-3xl relative z-0
        overflow-hidden 
        border border-white/40
        after:z-10 after:content-[''] 
        after:absolute after:inset-0
        after:rounded-3xl
        after:pointer-events-none`,
        className
      )}  
      {...other}
    >
      {children}
    </div>
  );
};
