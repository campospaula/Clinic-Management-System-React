import React, { useState } from "react";





function Form ({onAddPatient}) {

  const [nombre,setNombre]=useState("");

  const [email,setEmail]=useState("");

  const [mensaje, setMensaje]=useState("");




  //el handle hace que el formulario funcione

  const handleSubmit = (e)=>{

      e.preventDefault();

      const isValidarNombre = validarNombre(nombre);

      const isValidarEmail = validarEmail(email);


      if(nombre && email && mensaje && isValidarNombre && isValidarEmail){


          onAddPatient({nombre,email,mensaje});

          setNombre("");

          setEmail("");

          setMensaje("");

          //Alerta para confirmar

          alert(`Gracias ${nombre}, te contactaremos cuando antes vía mail.`);

      }

  };

  const validarNombre = (nombre) => {

    if (nombre.length < 5) {

      alert("El nombre debe tener al menos 5 caracteres.");

      return false;

    } else {

      return true;

    }

  };

  

  const validarEmail = (email) => {

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {

      alert("La dirección de correo electrónico no es válida.");

      return false;

    } else {

      return true;

    }

  };


    return(

        <div className="form">

            <form onSubmit={handleSubmit} >

                <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)} />

                <input type="email" placeholder="Ingrese su email" value={email} onChange={(e)=> setEmail(e.target.value)} />

                <textarea type="text" placeholder="Ingrese su mensaje" value={mensaje} onChange={(e)=> setMensaje(e.target.value)} />

                <button type="submit">Enviar</button>

            </form>

        </div>

    )

};




export default Form;
