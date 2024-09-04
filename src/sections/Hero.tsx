"use client";

import Image from "next/image";
import logoSB from "@/assets/logoSB.png";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ButtonSkill } from "@/components/ButtonSkill";

import { Text } from "@/components/Text";

import archQ from "@/assets/sqCaracter/archerQ.webp";
import barbK from "@/assets/sqCaracter/barbK.webp";
import trader from "@/assets/sqCaracter/trader.webp";
import healer from "@/assets/sqCaracter/healer.webp";
import hogrider from "@/assets/sqCaracter/hogrider.webp";
import chicken from "@/assets/sqCaracter/chicken.webp";

export const Hero = () => {
  const ConstraintRef = useRef(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const explanationText = `
Besonderheit im Truhen-Zyklus:

Im aktuellen Truhen-Zyklus gibt es eine interessante Besonderheit. Ein Teil des Zyklus wiederholt sich, was zu einer möglichen Mehrdeutigkeit bei der Vorhersage führen kann.

Die sich wiederholende Sequenz ist: CRCCCRCCCRCRCCCRCE

Diese Sequenz taucht zweimal im Zyklus auf:
1. Von Position 31 bis 49
2. Von Position 39 bis 57 (überlappt mit dem Ende des Zyklus und dem Anfang)

Was bedeutet das für dich?
Wenn deine letzten Truhen genau dieser Sequenz entsprechen, könnte sich deine aktuelle Position an zwei verschiedenen Stellen im Zyklus befinden. In solchen Fällen wählt unser Vorhersage-Tool standardmäßig die früheste mögliche Position.

Um eine genauere Vorhersage zu erhalten, ist es hilfreich, wenn du mehr als 18 Truhen eingibst. Dies ermöglicht es dem Tool, den genauen Kontext zu bestimmen und die korrekte Position im Zyklus zu identifizieren.

Beachte: Diese Besonderheit betrifft nur einen kleinen Teil des Zyklus. Für die meisten Sequenzen gibt es eine eindeutige Position im Zyklus.
`;

  const sqCaracter = [
    {
      name: "Archer",
      image: archQ,
      left: "5%",
      top: "10%",
    },
    {
      name: "BarbarianK",
      image: barbK,
      left: "70%",
      top: "20%",
    },
    {
      name: "Trader",
      image: trader,
      left: "40%",
      top: "60%",
    },
    {
      name: "Healer",
      image: healer,
      left: "20%",
      top: "40%",
    },
    {
      name: "Hogrider",
      image: hogrider,
      left: "80%",
      top: "70%",
    },
    {
      name: "Chicken",
      image: chicken,
      left: "60%",
      top: "30%",
    },
  ];

  return (
    <div className="container py-10">
      {/* Image BOX */}
      <div className="relative" ref={ConstraintRef}>
        <div className="flex justify-center items-center">
          <Image
            src={logoSB}
            alt="Squad Busters Logo"
            width={800}
            height={400}
          />
        </div>
        {sqCaracter.map((caracter) => (
          <motion.div
            key={caracter.name}
            className="inline-flex absolute items-center justify-center cursor-grab active:cursor-grabbing"
            style={{
              left: caracter.left,
              top: caracter.top,
              width: "120px", // Anpassen nach Bedarf
              height: "120px", // Anpassen nach Bedarf
            }}
            drag
            dragConstraints={ConstraintRef}
          >
            <Image
              src={caracter.image}
              alt={caracter.name}
              width={50}
              height={50}
              className="absolute z-10 md:size-20 lg:size-32"
            />
            <div className="absolute inset-0 rounded-full opacity-50 z-20"></div>
          </motion.div>
        ))}
      </div>
      {/* Text BOX */}
      <div className="container py-10">
        <Text
          colorTitle="SquadTracker"
          className="text-center font-extra bold md:text-2xl  lg:text-3xl"
        />
        <Text
          title="Verfolge deine Truhen in Squad Busters"
          className="text-center"
        />
        <Text
          description="Füge deine letzten 3 bis 5 Truhen in den Truhen-Tracker unten ein, und BusterTrack wird dir deine nächste Truhe und aktuelle Position im Truhen-Zyklus anzeigen."
          className="text-center"
        />
      </div>
      {/* start text Besonderheit im Truhen-Zyklus */}
      <div className="flex flex-col items-center">
        <ButtonSkill onClick={() => setShowExplanation(!showExplanation)}>
          {showExplanation
            ? "Erklärung ausblenden"
            : "Besonderheit im Truhen-Zyklus"}
        </ButtonSkill>
        {showExplanation && (
          <div className="mt-4 bg-zinc-800 p-4 rounded-3xl w-full">
            <pre className="whitespace-pre-wrap">{explanationText}</pre>
          </div>
        )}
      </div>
    </div>
  );
};
