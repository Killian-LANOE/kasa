import Rentals_Cards from "../Rentals_Cards/Rentals_Cards";

function Home() {
  const isDesktop = window.innerWidth >= 1024;

  return (
    <main className="h-full text-primary px-5 pb-5">
      <section className="h-[111px] w-auto rounded-xl bg-black/30 bg-Home_Banner bg-center bg-cover bg-no-repeat bg-blend-darken">
        <h1 className="text-white text-2xl py-8 pl-4 leading-6">
          Chez vous,{isDesktop ? "" : <br />} partout et ailleurs
        </h1>
      </section>
      <Rentals_Cards />
    </main>
  );
}

export default Home;
