import Rentals_Cards from "../Rentals_Cards/Rentals_Cards";

function Home() {
  const isMobile = window.innerWidth <= 425;

  return (
    <main className="h-full text-primary px-5 pb-5 lg:px-[6.25rem] lg:mt-16">
      <section className="h-[6.92rem] w-auto rounded-xl bg-black/30 bg-Home_Banner bg-center bg-cover bg-no-repeat bg-blend-darken lg:h-56 lg:rounded-3xl">
        <h1 className="h-full w-full text-white text-2xl py-8 pl-4 leading-6 md:flex md:justify-center md:items-center lg:text-5xl">
          Chez vous,{isMobile ? <br /> : ""} partout et ailleurs
        </h1>
      </section>
      <Rentals_Cards />
    </main>
  );
}

export default Home;
