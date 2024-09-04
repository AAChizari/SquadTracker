"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import commonChest from "@/assets/commonChest.png";
import rareChest from "@/assets/rareChest.png";
import epicChest from "@/assets/epicChest.png";
import unknownChest from "@/assets/unknownChest.png";
import { motion } from "framer-motion";
import { Text } from "@/components/Text";
import { ButtonSkill } from "@/components/ButtonSkill";

const chestCycle =
  "CRRCCRCCECRCRCCCRCRCCRRCCCECERCCRCCCRCRCCCRCECCCCRCERCRCECCR";

/* start ChestPredictor component */
export default function SquadTracker() {
  const [lastChests, setLastChests] = useState<string[]>([]);
  const [nextChest, setNextChest] = useState<"C" | "R" | "E" | null>(null);
  const [cyclePosition, setCyclePosition] = useState<number | null>(null);
  const [possiblePositions, setPossiblePositions] = useState<number[]>([]);
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);

  const chestImages: Record<"C" | "R" | "E", StaticImageData> = {
    C: commonChest,
    R: rareChest,
    E: epicChest,
  };

  /* start addChest function */
  const addChest = (type: "C" | "R" | "E") => {
    const newChests = [...lastChests, type].slice(-10);
    setLastChests(newChests);
    predictNextChest(newChests);
  }; /* end addChest function */

  /* start removeChest function */
  const removeChest = (index: number) => {
    const newChests = lastChests.filter((_, i) => i !== index);
    setLastChests(newChests);
    predictNextChest(newChests);
  }; /* end removeChest function */

  /* start findPatternPosition function */
  const findPatternPosition = (cycle: string, input: string): number => {
    const cycleLength = cycle.length;
    const inputLength = input.length;

    for (let i = 0; i < cycleLength; i++) {
      let match = true;
      for (let j = 0; j < inputLength; j++) {
        if (cycle[(i + j) % cycleLength] !== input[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        return i;
      }
    }
    return -1;
  }; /* end findPatternPosition function */

  /* start predictNextChest function */
  const predictNextChest = (chests: string[]) => {
    if (chests.length === 0) {
      setNextChest(null);
      setCyclePosition(null);
      return;
    }

    const input = chests.join(""); // Alle Elemente verwenden
    console.log("Eingabe (alle):", input);

    const cycleIndex = findPatternPosition(chestCycle, input);
    console.log("Übereinstimmung gefunden bei Index:", cycleIndex);

    if (cycleIndex === -1) {
      console.log("Keine Übereinstimmung gefunden");
      setNextChest(null);
      setCyclePosition(null);
      return;
    }

    const nextIndex = (cycleIndex + input.length) % chestCycle.length;
    const nextChestType = chestCycle[nextIndex] as "C" | "R" | "E";
    console.log("Nächste Truhe bei Index:", nextIndex, "Typ:", nextChestType);

    setNextChest(nextChestType);
    setCyclePosition(cycleIndex);
  }; /* end predictNextChest function */

  /* start clearAllChests function */
  const clearAllChests = () => {
    setLastChests([]);
    setNextChest(null);
    setCyclePosition(null);
  }; /* end clearAllChests function */

  // Funktion zum Finden aller möglichen Positionen
  const findAllPossiblePositions = (chests: string[]) => {
    const positions: number[] = [];
    for (let i = 0; i < chestCycle.length; i++) {
      if (
        chests.every(
          (chest, index) =>
            chest === chestCycle[(i + index) % chestCycle.length]
        )
      ) {
        positions.push(i);
      }
    }
    return positions;
  };

  // Aktualisiere mögliche Positionen, wenn sich die Truhen ändern
  useEffect(() => {
    const positions = findAllPossiblePositions(lastChests.filter(Boolean));
    setPossiblePositions(positions);
    setCurrentPositionIndex(0);
  }, [lastChests]);

  // Funktion zum Navigieren durch mögliche Positionen
  const cycleNextPosition = () => {
    setCurrentPositionIndex(
      (prevIndex) => (prevIndex + 1) % possiblePositions.length
    );
  };

  // Berechne die aktuelle Position basierend auf dem aktuellen Index
  const currentPosition = possiblePositions[currentPositionIndex] || 0;

  // Aktualisiere die Vorhersage basierend auf der aktuellen Position
  useEffect(() => {
    if (lastChests.length > 0) {
      const nextIndex =
        (currentPosition + lastChests.filter(Boolean).length) %
        chestCycle.length;
      const predictedNextChest = chestCycle[nextIndex] as "C" | "R" | "E";
      setNextChest(predictedNextChest);
      setCyclePosition(currentPosition);
    }
  }, [currentPosition, lastChests]);

  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <Text title="Nächste Truhe!" className="text-center" />
        <div className="flex items-center justify-center py-10">
          {nextChest ? (
            <Image
              src={chestImages[nextChest]}
              alt={`${nextChest} Chest`}
              width={290}
              height={290}
            />
          ) : (
            <Image
              src={unknownChest}
              alt="Unknown Chest"
              width={320}
              height={320}
            />
          )}
        </div>
        {/* end next chest prediction */}

        {/* start clear all button */}
        <div className="flex justify-center">
          <button
            onClick={clearAllChests}
            className={`relative py-2 px-3 font-extrabold rounded-lg p-2 text-sm cursor-default overflow-hidden group`}
          >
            <div className="absolute inset-0 bg-black group-hover:bg-red-400 transition-colors duration-300 ease-in-out"></div>
            <div className="absolute inset-0">
              <div className="rounded-lg border border-red-700 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
              <div className="rounded-lg border absolute inset-0 border-red-700 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
              <div className="absolute inset-0 shadow-[0_0_10px_#ff0000_inset] rounded-lg"></div>
            </div>
            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300 ease-in-out">
              Alle Truhen löschen
            </span>
          </button>
        </div>
        {/* end clear all button */}

        {/* start add chest buttons */}
        <div className="container">
          <div className="py-5">
            <Text title="Truhe hinzufügen" className="text-center" />
            <div className="flex justify-center">
              {[
                { type: "C" as const },
                { type: "R" as const },
                { type: "E" as const },
              ].map((chest) => (
                <motion.button
                  key={chest.type}
                  onClick={() => addChest(chest.type)}
                  className="w-40 h-40 flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [-3, 3, -3],
                    transition: {
                      y: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1,
                        ease: "easeInOut",
                      },
                      rotate: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2,
                        ease: "easeInOut",
                      },
                    },
                  }}
                >
                  <Image
                    src={chestImages[chest.type]}
                    alt={`${chest.type} Chest`}
                    width={160}
                    height={160}
                    className="size-35"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        {/* end add chest buttons */}

        {/* last chests display */}
        <div className="container">
          <Text title="Letzte Truhen" className="text-center mb-5" />
          <div className="grid grid-cols-5">
            {Array(10)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="relative w-12 h-12 md:w-24 md:h-24">
                  <div className="w-full h-full flex items-center justify-center">
                    {lastChests[index] ? (
                      <Image
                        src={chestImages[lastChests[index] as "C" | "R" | "E"]}
                        alt={`${lastChests[index]} Chest`}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    ) : (
                      <Image
                        src={unknownChest}
                        alt="Unknown Chest"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    )}
                  </div>
                  {lastChests[index] && (
                    <button
                      onClick={() => removeChest(index)}
                      className={`absolute top-0 left-0 text-2xl font-extrabold rounded-lg w-6 h-6 md:w-8 md:h-8 flex items-center justify-center hover:bg-red-600`}
                    >
                      <div className="absolute inset-0 bg-transparent group-hover:bg-red-400 transition-colors duration-300 ease-in-out"></div>
                      <div className="absolute inset-0">
                        <div className="rounded-lg border border-red-700 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                        <div className="rounded-lg border absolute inset-0 border-red-700 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                        <div className="absolute inset-0 shadow-[0_0_10px_#ff0000_inset] rounded-lg"></div>
                      </div>
                      <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300 ease-in-out">
                        -
                      </span>
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
        {/* end last chests display
         */}

        {/* start chest cycle display */}
        <div className="container py-10">
          <Text
            colorTitle="Truhen-Zyklus (August 2024)"
            className="text-center mb-5"
          />

          {/* next possible position button */}
          <div className="flex justify-center items-center my-4">
            <button
              onClick={cycleNextPosition}
              disabled={possiblePositions.length <= 1}
              className={`relative py-2 px-4 text-sm font-bold rounded-lg flex items-center justify-center hover:bg-orange-300 text-white transition-colors duration-300`}
            >
              <div className="absolute inset-0 bg-transparent group-hover:bg-orange-300 transition-colors duration-300 ease-in-out"></div>
              <div className="absolute inset-0">
                <div className="rounded-lg border border-orange-300 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg border absolute inset-0 border-orange-300 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_#ff0000_inset] rounded-lg"></div>
              </div>
              <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300 ease-in-out">
                Nächste mögliche Position ➙
              </span>
            </button>
          </div>
          {/* end next possible position button */}

          <div className="grid grid-cols-6 md:grid-cols-12 lg:grid-cols-15 gap-1 min-w-max">
            {chestCycle.split("").map((chest, index) => (
              <div
                key={index}
                className={`w-7 h-7 md:w-10 md:h-10 flex flex-col items-center justify-center relative
                  ${cyclePosition !== null && index === (cyclePosition + lastChests.length - 1) % chestCycle.length ? "ring-2 ring-green-500" : ""}`}
              >
                <Image
                  src={chestImages[chest as "C" | "R" | "E"]}
                  alt={`${chest} Chest`}
                  width={80}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
        {/* end chest cycle display */}
      </div>
    </div>
  );
}
/* end ChestPredictor component */
