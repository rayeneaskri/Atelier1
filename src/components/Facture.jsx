import { useState } from "react";
import Client from "./Client";

const Facture = () => {
  const [fact, setFact] = useState({
    numfact: "100",
    datefact: "21/12/2023",
    mtfact: 10000,
  });

  const handleChange = () => {
    setFact({ ...fact, numfact: "200" });
  };

  return (
    <>
         
      <h1>{fact.numfact}</h1>
      <h3>{fact.datefact}</h3>
      <h3>{fact.mtfact}</h3>
      <button className="btn btn-primary" onClick={handleChange}>
        Modifier
      </button>
    </>
  );
};

export default Facture;
