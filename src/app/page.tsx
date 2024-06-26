import Image from "next/image";

import {
  Home as HomeIcon,
  Search as SearchIcon,
  Library as LibraryIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";

import { Card, Footer } from "@/components";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="md:w-72 bg-zinc-900 p-6">
          <nav className="space-y-4">
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
            >
              <SearchIcon />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
            >
              <LibraryIcon />
              Your library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 2
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 3
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 4
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeftIcon />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRightIcon />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <Card title="Playlist/album" description="artist" imgSize={104} />
            <Card title="Playlist/album" description="artist" imgSize={104} />
            <Card title="Playlist/album" description="artist" imgSize={104} />
            <Card title="Playlist/album" description="artist" imgSize={104} />
            <Card title="Playlist/album" description="artist" imgSize={104} />
            <Card title="Playlist/album" description="artist" imgSize={104} />
            <Card title="Playlist/album" description="artist" imgSize={104} />
          </div>

          <div className="w-full flex items-center justify-between mt-10">
            <span className="font-semibold text-2xl">Feito para você</span>
            <a href="" className="text-md text-zinc-300 hover:underline">
              Mostrar tudo
            </a>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-9 gap-4 mt-4">
            <Card
              title="Playlist/album"
              description="artist"
              col
              imgSize={172}
            />
            <Card
              title="Playlist/album"
              description="artist"
              col
              imgSize={172}
            />
            <Card
              title="Playlist/album"
              description="artist"
              col
              imgSize={172}
            />
            <Card
              title="Playlist/album"
              description="artist"
              col
              imgSize={172}
            />
            <Card
              title="Playlist/album"
              description="artist"
              col
              imgSize={172}
            />
            <Card
              title="Playlist/album"
              description="artist"
              col
              imgSize={172}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
