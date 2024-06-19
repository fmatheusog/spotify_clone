import Image from "next/image";

import { Play as PlayIcon } from "lucide-react";

export default function HorizontalCard() {
  return (
    <a className="p-1 bg-white/5 hover:bg-white/10 group cursor-pointer transition-colors flex items-center gap-4 rounded overflow-hidden">
      <Image
        src="/120x120.svg"
        alt="Playlist or album cover"
        width={104}
        height={104}
      />
      <strong>Album/playlist</strong>
      <button className="flex items-center justify-center p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <PlayIcon fill="black" />
      </button>
    </a>
  );
}
