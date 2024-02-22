export default function Footer () {
    return (
        <footer className="bg-none pt-4">
      <div className="container mx-auto text-center">
      <p className="text-xs text-slate-400 font-sans" style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.6)" }}>&copy; {new Date().getFullYear()} Vitória Junker. Todos os direitos reservados.</p>
      </div>
    </footer>
    )
}