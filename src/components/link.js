import Link from "next/link";

export default function Links({ href, children, target, active }) {
  return (
    <Link
      href={href}
      target={target}
      active={active}
      className={`text-pink  md:text-base font-medium font-karla transition hover:text-pink-3 transition duration-300 ease-in-out transform pb-2 ${active ? 'border-b-2 border-pink-3 text-pink-3' : ''} `}
      style={{ textShadow: "0.5px 0.5px 0.5px rgba(0, 0, 0)" }}
    >
        {children}
    </Link>
  );
}
