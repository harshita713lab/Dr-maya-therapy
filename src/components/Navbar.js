import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-[#E5E0D8] text-[#4A4A4A]">
      {/* Logo Section */}
      <div className="text-2xl font-serif font-bold tracking-wide">
        Lilac Template
      </div>

      {/* Menu Links */}
      <div className="flex gap-8 text-sm font-medium tracking-widest uppercase">
        <Link href="#" className="hover:text-black transition">Blog</Link>
        <Link href="#" className="hover:text-black transition">Contact</Link>
        
        {/* The "..." Icon */}
        <button className="border border-[#4A4A4A] rounded-full p-2 hover:bg-white transition">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM17.25 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}