import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <a className="text-xl font-bold">Rin Reaksmey</a>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/about">
            <a className="hover:text-gray-400">About</a>
          </Link>
          <Link href="/projects">
            <a className="hover:text-gray-400">Projects</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-gray-400">Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
