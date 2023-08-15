import Link from "next/link";

export default function Links({ href, children, target, active }) {
  return (
    <Link
      href={href}
      target={target}
      active={active}
      className={`text-pink  md:text-base font-medium font-fredoka transition hover:text-pink-3 transition duration-300 ease-in-out transform ${active ? 'text-pink-3 underline' : ''}`}
      style={{ textShadow: "0.5px 0.5px 0.5px rgba(0, 0, 0)" }}
    >
      {children}
    </Link>
  );
}
