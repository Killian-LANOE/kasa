import Logo_Kasa_White from "../../assets/Logo_Kasa_White.svg";

function Footer() {
  return (
    <footer className="flex flex-col justify-center text-center h-[209px] bg-black text-white">
      <img className="h-10 w-full mb-8" src={Logo_Kasa_White}></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
