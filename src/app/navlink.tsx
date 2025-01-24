'use client';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  text: string;
  external?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text, external = false }) => {
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-500 font-bold hover:text-yellow-600 transition duration-300"
    >
      {text}
    </a>
  ) : (
    <Link
      href={href}
      className="text-yellow-500 font-bold hover:text-yellow-600 transition duration-300"
    >
      {text}
    </Link>
  );
};

export default NavLink;