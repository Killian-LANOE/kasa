import { Link } from "react-router-dom";
function Error() {
  const isMobile = window.innerWidth <= 425;

  return (
    <main className="mobile-height md:tablet-height flex flex-col text-center justify-around text-primary lg:desktop-height">
      <div className="mt-40">
        <h1 className="text-8xl font-bold leading-[138px] md:h-[12rem] md:text-[12rem] lg:h-[18rem] lg:text-[18rem]">
          404
        </h1>
        <p className="text-lg font-medium leading-6 md:text-2xl lg:text-4xl">
          Oups! La page que {isMobile ? <br /> : ""} vous demandez n&apos;existe
          pas.
        </p>
      </div>
      <div>
        <Link className="text-sm underline md:text-lg" to="/">
          Retourner sur la page d&apos;accueil
        </Link>
      </div>
    </main>
  );
}
export default Error;
