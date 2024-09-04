"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { Text } from "@/components/Text";
import bacover from "@/assets/abschlussarbeitCover.png";
import ChevronRightIcon from "@/assets/socials/social-x.svg"; // Importieren Sie die Icons
import { TechIcon } from "@/components/TechIcon";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem } from "@/components/ToolboxItem";

import mapImage from "@/assets/map.jpeg";
import smileMemoji from "@/assets/aac-profileSmileMoji.png";
import LogoIcon from "@/assets/logo.svg";

import androidStudioIcon from "@/assets/iconSkills/androidStudio.png";
import cLogoIcon from "@/assets/iconSkills/C_Logo.png";
import cPlusPlusIcon from "@/assets/iconSkills/c++.png";
import css3Icon from "@/assets/iconSkills/css3.png";
import dockerIcon from "@/assets/iconSkills/docker.png";
import firebaseIcon from "@/assets/iconSkills/firebase.png";
import framerMotionIcon from "@/assets/iconSkills/framerMotion.png";
import fusion360Icon from "@/assets/iconSkills/fusion360.png";
import gitIcon from "@/assets/iconSkills/Git.png";
import githubIcon from "@/assets/iconSkills/github.png";
import jsIcon from "@/assets/iconSkills/js.png";
import kotlinIcon from "@/assets/iconSkills/kotlin.png";
import linuxIcon from "@/assets/iconSkills/linux.png";
import macOSIcon from "@/assets/iconSkills/macOS.png";
import markdownIcon from "@/assets/iconSkills/markdown.png";
import msOfficeIcon from "@/assets/iconSkills/ms-office.png";
import nextIcon from "@/assets/iconSkills/next.png";
import overleafIcon from "@/assets/iconSkills/overleaf.png";
import photoshopIcon from "@/assets/iconSkills/photoshop.png";
import reactIcon from "@/assets/iconSkills/react.png";
import starUmlIcon from "@/assets/iconSkills/Staruml.png";
import tailwindIcon from "@/assets/iconSkills/Tailwind.png";
import tsIcon from "@/assets/iconSkills/ts.png";
import vsIcon from "@/assets/iconSkills/vs.png";
import windowsIcon from "@/assets/iconSkills/windows.png";

export const SkillItem = {
  skills: [
    { name: "Android Studio", iconType: androidStudioIcon },
    { name: "Visual Studio", iconType: vsIcon },
    { name: "Kotlin", iconType: kotlinIcon },
    { name: "C", iconType: cLogoIcon },
    { name: "C++", iconType: cPlusPlusIcon },
    { name: "JavaScript", iconType: jsIcon },
    { name: "TypeScript", iconType: tsIcon },
    { name: "Windows", iconType: windowsIcon },
    { name: "Linux", iconType: linuxIcon },
    { name: "macOS", iconType: macOSIcon },
    { name: "CSS", iconType: css3Icon },
    { name: "React.js", iconType: reactIcon },
    { name: "Next.js", iconType: nextIcon },
    { name: "Tailwind CSS", iconType: tailwindIcon },
    { name: "Framer Motion", iconType: framerMotionIcon },
    { name: "GitHub", iconType: githubIcon },
    { name: "Git", iconType: gitIcon },
    { name: "Firebase", iconType: firebaseIcon },
    { name: "Docker", iconType: dockerIcon },
    { name: "StarUML", iconType: starUmlIcon },
    { name: "Fusion 360", iconType: fusion360Icon },
    { name: "Adobe Photoshop", iconType: photoshopIcon },
    { name: "MS Office", iconType: msOfficeIcon },
    { name: "Overleaf", iconType: overleafIcon },
    { name: "Markdown", iconType: markdownIcon },
  ],
};

const hobbies = [
  { name: "digitalArt", emoji: "🎨", left: "5%", top: "5%" },
  { name: "gaming", emoji: "🎮", left: "50%", top: "5%" },
  { name: "reading", emoji: "📚", left: "10%", top: "35%" },
  { name: "traveling", emoji: "🌍", left: "60%", top: "35%" },
  { name: "sports", emoji: "🏋️‍♂️", left: "5%", top: "65%" },
  { name: "music", emoji: "🎵", left: "45%", top: "70%" },
];

export const Skills = () => {
  const ConstraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <Text colorTitle="Über mich" className="text-center"/>
        <Text title="Ein Einblick in meine Welt." className="text-center" />
        <Text
          description="Erfahren mehr über mich, was ich tue und was mich inspiriert."
          className="text-center"
        />
        {/* acaReact Abschlussarbeit BOX */}
        <div className="mt-20 flex flex-col gap-8">
          {/* div Abschlussarbeit und Skills BOX */}
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="acaReact"
                description="meine Abschlussarbeit"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bacover} alt="Abschlussarbeit" />
              </div>
            </Card>
            {/* meine Skills BOX */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <div>
                <div>
                  <CardHeader
                    title="Meine Skills"
                    description="Werkzeuge und Technologien mit denen ich arbeite"
                    className=""
                  />
                </div>
              </div>
              <ToolboxItem
                items={SkillItem.skills}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:120s]"
              />
              <ToolboxItem
                items={SkillItem.skills}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:120s]"
              />
            </Card>
          </div>
          {/* div Hobbies und standort BOX */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* meine Hobbies BOX */}
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Außerhalb des Codens"
                description="Meine anderen Interessen und Hobbies außerhalb des Codens"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={ConstraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.name}
                    className="inline-flex gap-2 px-6 bg-gradient-to-r from-[#FFB16D] to-[#EC6F00] rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left, 
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={ConstraintRef}
                  >
                    <span className="font-extrabold text-gray-950">
                      {hobby.name}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            {/* mein standort BOX */}
            <Card className="h-[320px] p-0 flex flex-col md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full p-2 border border-gray-950/30 after:content-[''] after:absolute after:inset-0 after:-outline after:outline-2 after:outline-offset-2 after:outline-rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFB16D] to-[#EC6F00] -z-20 animate-ping [animation-duration:2s]"></div>

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFB16D] to-[#EC6F00] -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="Smile Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
