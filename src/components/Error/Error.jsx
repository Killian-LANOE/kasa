function Error() {
  const isMobile = window.innerWidth <= 425;

  return (
    <main className="mobile-height md:tablet-height flex flex-col text-center justify-around text-primary">
      <div>
        <h1 className="text-8xl font-bold leading-[138px] md:h-[12rem] md:text-[12rem]">
          404
        </h1>
        <p className="text-lg font-medium leading-6 md:text-2xl">
          Oups! La page que {isMobile ? <br /> : ""} vous demandez n&apos;existe
          pas.
        </p>
      </div>
      <div>
        <a className="text-sm underline md:text-lg" href="/">
          Retourner sur la page d&apos;accueil
        </a>
      </div>
    </main>
  );
}
export default Error;
