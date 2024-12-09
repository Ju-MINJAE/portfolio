'use client';

import { headerNav } from '@/constants/layout';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white fixed w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="text-2xl font-bold cursor-pointer">
          MinJae's Portfolio
        </a>
        <nav className="hidden md:flex space-x-6">
          <ul className="flex align-center gap-x-4">
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
