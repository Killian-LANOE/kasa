import Rentals from "../../data/data.json";

function Rentals_Cards() {
  return (
    <section className="h-full w-full flex flex-col gap-5 mt-[22px]">
      {Rentals.map((rent) => {
        return (
          <a
            href={`/location/:${rent.id}`}
            className="h-64 w-full"
            key={rent.id}
          >
            <figure className="relative h-full w-full object-cover">
              <img
                className="h-full w-full rounded-xl"
                src={rent.cover}
                alt={rent.title}
              ></img>
              <figcaption className="absolute bottom-0 mb-4 mx-5 text-white text-lg font-medium leading-6 z-10">
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
