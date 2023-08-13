import { Link } from "react-router-dom";
import Logo from "../../assets/Logo_Kasa.svg";

function Header() {
  return (
    <header className="flex items-center justify-between h-full w-full text-primary mb-4 px-5 mt-5">
      <img src={Logo} alt="Logo of Kasa" className="h-12 w-auto"></img>
      <nav className="flex justify-center gap-[10px] text-xs leading-[17.1px] font-medium uppercase">
        <Link className="hover:underline" to="/">
          Accueil
        </Link>
        <Link className="hover:underline" to="/A_Propos">
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
