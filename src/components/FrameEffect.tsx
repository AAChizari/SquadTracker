interface FrameEffectProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
  shadowColor?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  shadowIntensity?: number;
  borderWidth?: string;
}

export const FrameEffect = ({
  children,
  className = '',
  borderColor = '#009999',
  shadowColor = '#009999',
  backgroundColor = '#001f1f',
  padding = 'p-4',
  borderRadius = 'rounded-lg',
  shadowIntensity = 10,
  borderWidth = 'border'
}: FrameEffectProps) => {
  return (
    <div className={`relative h-full ${className}`}>
      <div className={`absolute inset-0 ${borderRadius}`} style={{ backgroundColor }}>
        <div className={`${borderRadius} ${borderWidth} border-[${borderColor}] absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]`}></div>
        <div className={`${borderRadius} ${borderWidth} absolute inset-0 border-[${borderColor}] [mask-image:linear-gradient(to_top,black,transparent)]`}></div>
        <div className={`absolute inset-0 shadow-[0_0_${shadowIntensity}px_${shadowColor}_inset] ${borderRadius}`}></div>
      </div>
      <div className={`relative z-10 h-full overflow-hidden ${padding}`}>
        {children}
      </div>
    </div>
  );
};