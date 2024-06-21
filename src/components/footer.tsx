import Image from "next/image";

import {
  ChevronFirst as ChevronFirstIcon,
  ChevronLast as ChevronLastIcon,
  Headphones as HeadphonesIcon,
  ListMusic as ListMusicIcon,
  Maximize2 as Maximize2Icon,
  MicVocal as MicVocalIcon,
  Play as PlayIcon,
  Repeat as RepeatIcon,
  Shuffle as ShuffleIcon,
  SquarePlay as SquarePlayIcon,
  Volume2 as Volume2Icon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 bg-zinc-900 border-t border-zinc-700 p-3 flex items-center justify-between">
      <div className="w-[33%] flex items-center gap-4">
        <Image src="/120x120.svg" alt="" width={54} height={54} />
        <div className="flex flex-col">
          <strong className="font-semibold hover:underline cursor-pointer">
            Música
          </strong>
          <span className="text-zinc-400 text-sm hover:underline cursor-pointer">
            Artista
          </span>
        </div>
      </div>
      <div className="w-[33%] flex flex-col gap-2 items-center justify-center">
        <div className="flex gap-4 items-center justify-between">
          <button>
            <ShuffleIcon size="18px" strokeWidth={1} />
          </button>
          <button>
            <ChevronFirstIcon />
          </button>
          <button className="rounded-full bg-zinc-50 p-1">
            <PlayIcon size="22px" fill="black" />
          </button>
          <button>
            <ChevronLastIcon />
          </button>
          <button>
            <RepeatIcon size="18px" strokeWidth={1} />
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-sm text-zinc-400">1:04</span>
          <button className="w-64 h-1 rounded-l-lg rounded-r-lg bg-zinc-600">
            <div className="w-16 h-1 rounded-l-lg rounded-r-lg bg-zinc-300"></div>
          </button>
          <span className="text-sm text-zinc-400">4:00</span>
        </div>
      </div>
      <div className="w-[33%] flex gap-3 items-center justify-end">
        <button>
          <SquarePlayIcon size="18px" strokeWidth={1} />
        </button>
        <button>
          <MicVocalIcon size="18px" strokeWidth={1} />
        </button>
        <button>
          <ListMusicIcon size="18px" strokeWidth={1} />
        </button>
        <button>
          <HeadphonesIcon size="18px" strokeWidth={1} />
        </button>
        <button>
          <Volume2Icon size="18px" strokeWidth={1} />
        </button>
        <button className="w-32 h-1 rounded-l-lg rounded-r-lg bg-zinc-600">
          <div className="w-[100%] h-1 rounded-l-lg rounded-r-lg bg-zinc-300"></div>
        </button>
        <button>
          <Maximize2Icon size="18px" strokeWidth={1} />
        </button>
      </div>
    </footer>
  );
}
