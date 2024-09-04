import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#0099996b] to-[#009999] shadow-[0px0px_12px#8c45ff] ${className || ''}`}
      {...props}
    >
      <div className="absolute inset-0">
        <div className="rounded-lg border border-[#009999] absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-[#009999] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_#009999_inset] rounded-lg"></div>
      </div>
      <span>{children}</span>
    </button>
  );
};