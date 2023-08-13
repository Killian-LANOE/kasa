import { useParams } from "react-router-dom";

function Rent_Pages() {
  const params = useParams();
  const id = params.id;

  return <div className=" text-primary">{id}</div>;
}

export default Rent_Pages;
