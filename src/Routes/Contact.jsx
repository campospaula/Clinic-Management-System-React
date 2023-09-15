import React from 'react'

import Form from '../Components/Form'

import { useContext } from 'react'

import { ContextGlobal } from '../Components/utils/global.context'




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context




const Contact = () => {

  const {state} = useContext(ContextGlobal);




  const onAddPatient = (patientData) => {

    console.log('Consulta agregada:', patientData);

  };




  return (

    <div style={{ background: state.theme.backgroundCard, color:state.theme.color }}>

      <div>

        <h1>Contactanos</h1>

        <p  style={{ textAlign: 'center', paddingBottom:'1rem'}}>Envía tus sugerencias</p>

        <Form onAddPatient={onAddPatient} />

      </div>

    </div>

  );

};




export default Contact