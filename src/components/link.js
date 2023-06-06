import Link from "next/link";

export default function Links({ href, children, target, active }) {
  return (
    <Link
      href={href}
      target={target}
      active={active}
      className={`text-pink text-xs md:text-base  font-bold  transition hover:text-pink-3 ${active ? 'text-pink-3 underline' : ''}`}
      style={{ textShadow: "0.5px 0.5px 0.5px rgba(0, 0, 0)" }}
    >
      {children}
    </Link>
  );
}
