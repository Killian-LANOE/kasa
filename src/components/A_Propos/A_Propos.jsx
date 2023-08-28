import ArrowMenu from "../../assets/Arrow_Menu.svg";

function A_Propos() {
  const A_Propos_Infos = [
    {
      title: "Fiabilité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  function handleArrow(e) {
    const Arrow = e.target.querySelector("img");
    Arrow.classList.toggle("rotate-180");
  }

  return (
    <main className="mobile-height text-primary px-5 mt-4">
      <section className="h-56 w-full rounded-xl bg-black/30 bg-A_Propos_Banner bg-cover bg-no-repeat bg-blend-darken"></section>
      <section className="flex flex-col gap-3 mt-5">
        {A_Propos_Infos.map((info) => {
          return (
            <details className="last:pb-11" key={info.title}>
              <summary
                onClick={handleArrow}
                className="flex justify-between items-center h-8 pl-3 text-white text-sm bg-primary rounded-md"
              >
                {info.title}
                <span className="pr-1.5 pointer-events-none">
                  <img src={ArrowMenu} alt="Arrow of menu"></img>
                </span>
              </summary>
              <p className="text-xs h-36 w-full px-3 pt-4 bg-secondary rounded-md">
                {info.description}
              </p>
            </details>
          );
        })}
      </section>
    </main>
  );
}

export default A_Propos;
