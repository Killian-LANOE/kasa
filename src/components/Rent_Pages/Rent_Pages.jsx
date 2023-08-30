import { useParams } from "react-router-dom";
import datas from "../../data/data.json";
import ArrowMenu from "../../assets/Arrow_Menu.svg";
import StarsRatings from "../StarsRatings/StarsRatings";
import { useState } from "react";

function Rent_Pages() {
  const params = useParams();
  const id = params.id.replace(":", "");
  const [number, setNumber] = useState(0);
  let rent;
  let pictures;

  async function getRent() {
    datas.filter((data) => {
      if (data.id === id) {
        rent = data;
      }
    });
  }

  async function getPictures() {
    pictures = rent.pictures;
  }

  async function getDatas() {
    getRent();
    getPictures();
  }

  window.onload = getDatas();

  function handleArrow(e) {
    const Arrow = e.target.querySelector("img");
    Arrow.classList.toggle("rotate-180");
  }

  function handleNextPicture() {
    const length = pictures.length - 1;
    if (number < length) {
      setNumber((number) => number + 1);
    } else if (number === length) {
      setNumber(0);
    }
  }

  function handleLastPicture() {
    const length = pictures.length - 1;
    if (number > 0) {
      setNumber((number) => number - 1);
    } else if (number === 0) {
      setNumber(length);
    }
  }

  return (
    <main className=" text-primary px-5 pt-3 mobile-height md:tablet-height md:px-12 lg:px-[6.25rem] lg:desktop-height">
      <div className="relative h-64 w-full mb-4 md:h-80 lg:h-[25.9rem]">
        <button
          id="left"
          onClick={handleLastPicture}
          className="bg-black/20 h-full rounded-l-xl w-10 text-6xl absolute top-1/2 -translate-y-1/2 left-0 z-10 text-black"
        >
          <img
            className="absolute top-1/2 right-1/3 -translate-y-1/2 h-6 w-6 rotate-90"
            src={ArrowMenu}
            alt="Left Arrow Carrousel"
          ></img>
        </button>
        <img
          className="h-full w-full rounded-xl object-cover"
          src={pictures[number]}
          alt={rent.title}
        ></img>
        <button
          id="right"
          onClick={handleNextPicture}
          className=" bg-black/20 h-full rounded-r-xl w-10 text-6xl absolute top-1/2 -translate-y-1/2 right-0 z-10 text-black"
        >
          <img
            className="absolute top-1/2 left-1/3 -translate-y-1/2 h-6 w-6 -rotate-90"
            src={ArrowMenu}
            alt="Right Arrow Carrousel"
          ></img>
        </button>
      </div>

      <section className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-1 mb-4">
          <h1 className="text-lg font-medium md:text-3xl lg:text-4xl">
            {rent.title}
          </h1>
          <h2 className="text-[0.95rem] font-medium md:text-lg md:mb-3 lg:text-lg">
            {rent.location}
          </h2>
          <ul className="flex gap-3">
            {rent.tags.map((tag) => {
              return (
                <li
                  className="flex items-center justify-center w-auto px-3 text-[0.65rem] rounded-md bg-primary text-white md:text-sm lg:text-sm lg:px-5 lg:py-1 lg:rounded-xl"
                  key={tag}
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-row-reverse justify-between items-center md:flex-col md:justify-around lg:items-end">
          <div className="flex flex-row-reverse gap-3 items-center lg:items-end">
            <img
              className="h-8 w-8 rounded-full md:h-12 md:w-12"
              src={rent.host.picture}
              alt={`picture of the host ${rent.host.name}`}
            ></img>
            <p className="w-min text-right text-xs md:text-base">
              {rent.host.name}
            </p>
          </div>
          <StarsRatings rating={rent.rating} />
        </div>
      </section>

      <section className="mt-4 md:grid md:grid-cols-2 md:gap-6 md:justify-between">
        <details className=" text-white mb-5 rounded-t-lg md:text-lg">
          <summary
            onClick={handleArrow}
            className="flex bg-primary justify-between py-1.5 pl-3 items-center rounded-lg"
          >
            Description
            <span className="pr-1.5 pointer-events-none">
              <img src={ArrowMenu} alt="Arrow of menu"></img>
            </span>
          </summary>
          <p className="bg-secondary text-primary px-3 pt-4 rounded-lg pb-2 md:min-h-[24.25rem] lg:min-h-[15.5rem] lg:pt-10 lg:px-5">
            {rent.description}
          </p>
        </details>

        <details className=" text-white mb-[5.5rem] md:mb-5 md:text-lg">
          <summary
            onClick={handleArrow}
            className="flex bg-primary justify-between py-1.5 pl-3 items-center rounded-lg"
          >
            Équipements
            <span className="pr-1.5 pointer-events-none pl-1.5">
              <img src={ArrowMenu} alt="Arrow of menu"></img>
            </span>
          </summary>
          <ul className="bg-secondary text-primary px-3 pt-4 rounded-lg pb-2 md:min-h-[24.25rem] lg:min-h-[15.5rem] lg:pt-10 lg:px-5">
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
