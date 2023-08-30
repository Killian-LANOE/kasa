import { Link } from "react-router-dom";
import Logo from "../../assets/Logo_Kasa.svg";

function Header() {
  return (
    <header className="flex items-center justify-between h-full w-full text-primary mb-4 px-5 mt-5 md:px-12 lg:mt-10 lg:px-[6.25rem]">
      <img
        src={Logo}
        alt="Logo of Kasa"
        className="h-12 w-auto md:h-14 lg:h-[4.25rem]"
      ></img>
      <nav className="flex justify-center gap-[0.65rem] text-xs leading-[17.1px] font-medium uppercase md:text-base md:gap-6 lg:text-2xl lg:gap-14 md:normal-case">
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
