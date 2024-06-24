import Image from "next/image";

import { Play as PlayIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  col?: boolean;
  imgSize: number;
}

export default function Card({ title, description, col, imgSize }: CardProps) {
  return (
    <a
      className={`p-2 hover:bg-white/10 group cursor-pointer transition-colors flex ${
        col ? "w-fit flex-col items-start" : "w-full items-center"
      }  gap-4 rounded overflow-hidden`}
    >
      <div className="relative">
        <Image
          src="/120x120.svg"
          alt="Playlist or album cover"
          width={imgSize}
          height={imgSize}
        />
        <button className="absolute bottom-2 right-2 p-2 rounded-full bg-green-400 text-black invisible group-hover:visible">
          <PlayIcon fill="black" />
        </button>
      </div>

      <div className="md:flex flex-col hidden">
        <strong className="text-sm md:text-md lg:text-lg">{title}</strong>
        <span className="text-sm md:text-md">{description}</span>
      </div>
    </a>
  );
}
