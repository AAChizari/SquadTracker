export const Titeltext = (props: React.PropsWithChildren) => {
  return (
    <h1 className="font-serif text-3xl md:text-6xl md:leading-none tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(0,153,153,0.5))] text-transparent bg-clip-text">
      <span>{props.children}</span>
    </h1>
  );
};
