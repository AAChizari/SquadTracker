import Image, { StaticImageData } from 'next/image';

type TechIcon = {
  component: StaticImageData;
  alt: string;
};

export const TechIcon = ({ component, alt }: TechIcon) => {
  return <Image src={component} alt={alt} className='size-10'/>;
};