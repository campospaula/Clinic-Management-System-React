import React from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'


const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const isFav = state.favs.some((fav) => fav.id === id);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if (isFav) {
      dispatch({ type: "REMOVE_FAV", payload: { id, name, username } });
      alert("Eliminado de favoritos");
    } else {
      dispatch({ type: "ADD_FAV", payload: { id, name, username } });
      alert("Agregado a favoritos");
    }
  }

  return (
<div className="card" style={{ background: state.theme.backgroundCard, color: state.theme.color }}>
  <img className="card" src="./images/doctor.jpg" alt="" />
  {/* En cada card deberán mostrar en name - username y el id */}
  {/* No debes olvidar que la Card a su vez servirá como Link hacia la página de detalle */}
  <Link to={`/detail/${id}`}>
    <p>{name}</p>
  </Link>
  <p>{username}</p>
  {/* Además, deberán integrar la lógica para guardar cada Card en el localStorage */}
  <button className="favButton"onClick={addFav}>
    {isFav ? (
      <>
      <button ><FontAwesomeIcon icon={faXmark} /></button>
      </>
    ) : (
      <>
      <button><FontAwesomeIcon icon={faStar} /></button>
      </>
    )}
  </button>
</div>
);
};
export default Card;
