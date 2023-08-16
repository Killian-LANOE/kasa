import { useParams } from "react-router-dom";
import datas from "../../data/data.json";
import ArrowMenu from "../../assets/Arrow_Menu.svg";
import StarsRatings from "../StarsRatings/StarsRatings";

function Rent_Pages() {
  const params = useParams();
  const id = params.id.replace(":", "");
  let rent;

  window.onload = getRent();

  async function getRent() {
    datas.filter((data) => {
      if (data.id === id) {
        rent = data;
      }
    });
  }

  function handleClick(e) {
    const Arrow = e.target.querySelector("img");
    Arrow.classList.toggle("rotate-180");
  }

  return (
    <main className=" text-primary px-5 pt-3">
      <div className="h-64 w-full mb-4">
        <img
          className="h-full w-full rounded-xl object-cover"
          src={rent.pictures[0]}
          alt={rent.title}
        ></img>
      </div>
      <section className="flex flex-col">
        <div className="flex flex-col gap-1 mb-4">
          <h1 className="text-lg font-medium">{rent.title}</h1>
          <h2 className="text-[15px] font-medium">{rent.location}</h2>
          <ul className="flex gap-3">
            {rent.tags.map((tag) => {
              return (
                <li
                  className="flex items-center justify-center h-5 w-auto px-3 text-[10px] rounded-md bg-primary text-white"
                  key={tag}
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-row-reverse justify-between items-center">
          <div className="flex flex-row-reverse gap-3 items-center">
            <img
              className="h-8 w-8 rounded-full"
              src={rent.host.picture}
              alt={`picture of the host ${rent.host.name}`}
            ></img>
            <p className="w-min text-right text-xs">{rent.host.name}</p>
          </div>
          <StarsRatings rating={rent.rating} />
        </div>
      </section>
      <section className="mt-4">
        <details className="bg-primary text-white mb-5 rounded-t-lg">
          <summary
            onClick={handleClick}
            className="flex justify-between py-1.5 pl-3 items-center"
          >
            Description
            <span className="pr-1.5 pointer-events-none">
              <img src={ArrowMenu} alt="Arrow of menu"></img>
            </span>
          </summary>
          <p className="bg-secondary text-primary px-3 pt-4">
            {rent.description}
          </p>
        </details>
        <details className="bg-primary text-white mb-[5.5rem] rounded-t-lg">
          <summary
            onClick={handleClick}
            className="flex justify-between py-1.5 pl-3 items-center"
          >
            Équipements
            <span className="pr-1.5 pointer-events-none pl-1.5">
              <img src={ArrowMenu} alt="Arrow of menu"></img>
            </span>
          </summary>
          <ul className="bg-secondary text-primary px-3 pt-4">
            {rent.equipments.map((equipment) => {
              return <li key={equipment}>{equipment}</li>;
            })}
          </ul>
        </details>
      </section>
    </main>
  );
}

export default Rent_Pages;
