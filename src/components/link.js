import Link from "next/link";

export default function Links({ href, children, target }) {
  return (
    <Link
      href={href}
      target={target}
      className="text-pink text-xs md:text-sm  font-bold  transition hover:shadow-md hover:text-pink-3 "
      style={{ textShadow: "0.5px 0.5px 0.5px rgba(0, 0, 0)" }}
    >
      {children}
    </Link>
  );
}
