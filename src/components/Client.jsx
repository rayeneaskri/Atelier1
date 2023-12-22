import { useState } from "react";

const Client = () => {
  const [nom, setNom] = useState("Essat");
  const [ville, setVille] = useState("Gabes");
  const [adresse, setAdresse] = useState("route A1");

  return (
    <>
      <h1>Client</h1>
      <h1>le nom est : {nom}</h1>
      <h1>le nom est : {ville}</h1>
      <h1>le nom est : {adresse}</h1>
      <button className='btn btn-success' onClick={() => setNom("hi")}>
        Modifier
      </button>
    </>
  );
};

export default Client;