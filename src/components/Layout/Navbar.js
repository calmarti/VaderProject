export default function Navbar() {
  return (
    <header className="overscroll-none overflow-hidden w-screen">
    <nav className="fixed box-border bg-zinc-900 text-slate-200 h-24 w-screen">
      <ul className="flex justify-center items-center gap-x-14 h-24">
        <li>BIO</li>
        <li>BLOG</li>
        <li>LIBROS</li>
        <li>TEATRO</li>
        <li>PROYECTOS</li>
      </ul>
    </nav>
    </header>
  );
}
