import Rentals from "../../data/data.json";

function Rentals_Cards() {
  return (
    <section className="h-full w-full flex flex-col gap-5 mt-[1.37rem] rounded-3xl md:grid md:grid-cols-3 md:p-6 md:bg-secondary lg:px-12 lg:py-14">
      {Rentals.map((rent) => {
        return (
          <a
            href={`/location/:${rent.id}`}
            className="h-64 w-full md:h-full lg:h-56 xl:min-h-[21.25rem]"
            key={rent.id}
          >
            <figure className="relative h-full w-full">
              <img
                className="h-full w-full rounded-xl object-cover"
                src={rent.cover}
                alt={rent.title}
              ></img>
              <figcaption className="absolute bottom-0 mb-4 mx-5 text-white text-lg font-medium leading-6 z-10 md:w-10/12 md:overflow-hidden md:text-ellipsis md:whitespace-nowrap lg:whitespace-pre-line">
                {rent.title}
              </figcaption>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-xl"></div>
            </figure>
          </a>
        );
      })}
    </section>
  );
}

export default Rentals_Cards;
