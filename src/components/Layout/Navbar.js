export default function Navbar() {
  return (
    <header className="overscroll-none overflow-hidden w-screen">
      <nav className="fixed box-border bg-zinc-900 text-slate-200 h-24 w-screen ">
        <ul className="flex justify-center items-center gap-x-14 h-24">
          <li className="animated-option">BIO</li>
          <li className="animated-option">ARTíCULOS</li>
          <li className="animated-option">
            <a href="#libros">LIBROS</a>
          </li>
          <li className="animated-option">TEATRO</li>
        </ul>
      </nav>
    </header>
  );
}
