import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        AISAPH<span>-CV</span>
      </div>

      <ul className="nav-links">
        <li><Link href="#cursos">Cursos</Link></li>
        <li><Link href="#porque">Por Que Nós</Link></li>
        <li><Link href="#incompany">Empresas</Link></li>
        <li><Link href="#calendario">Inscrições</Link></li>
        {/* <li><Link href="#calendario" className="nav-cta">Inscrever-se</Link></li> */}
      </ul>
    </nav>
  );
}