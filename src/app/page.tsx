import {
  Home as HomeIcon,
  Search as SearchIcon,
  Library as LibraryIcon,
} from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-900 p-6">
          <nav className="space-y-4">
            <a className="flex items-center gap-2 text-xs font-semibold text-zinc-100">
              <HomeIcon />
              Home
            </a>
            <a className="flex items-center gap-2 text-xs font-semibold text-zinc-100">
              <SearchIcon />
              Search
            </a>
            <a className="flex items-center gap-2 text-xs font-semibold text-zinc-100">
              <LibraryIcon />
              Your library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 2
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 3
            </a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 4
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">Main</main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        Footer
      </footer>
    </div>
  );
}
