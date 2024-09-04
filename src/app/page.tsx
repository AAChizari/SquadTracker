import SquadTracker from "@/sections/Squadtracker";
import { Scroll } from "@/sections/Scroll";
import { Tape } from "@/sections/Tape";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Scroll />
      <SquadTracker />
      <Footer />
    </>
  );
}
