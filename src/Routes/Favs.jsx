import React from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state } = useContext(ContextGlobal);

  const favoriteDentists = state.favs;


  return (
    <div style={{ background: state.theme.backgroundHome}}>
      <h1 style={{ color:state.theme.color }}>Dentists Favs</h1>
      <div className="card-grid">
      {favoriteDentists.map((favoriteDentist) => (
    <Card
      key={favoriteDentist.id}
      id={favoriteDentist.id}
      name={favoriteDentist.name}
      username={favoriteDentist.username}
    />
  ))}
      </div>
    </div>
  );
};

export default Favs;
