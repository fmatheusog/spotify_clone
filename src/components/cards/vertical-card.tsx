import Image from "next/image";

import { Play as PlayIcon } from "lucide-react";

export default function VerticalCard() {
  return (
    <a className="p-2 hover:bg-white/10 group cursor-pointer transition-colors flex flex-col items-start gap-4 rounded overflow-hidden">
      <div className="relative">
        <Image
          src="/120x120.svg"
          alt="Playlist or album cover"
          width={172}
          height={172}
        />
        <button className="absolute bottom-2 right-2 p-2 rounded-full bg-green-400 text-black invisible group-hover:visible">
          <PlayIcon fill="black" />
        </button>
      </div>

      <div className="flex flex-col">
        <span>
          <strong>Playlist/album</strong>
        </span>
        <span>Descrição</span>
      </div>
    </a>
  );
}
