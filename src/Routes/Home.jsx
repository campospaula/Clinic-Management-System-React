import React from 'react'
import Card from '../Components/Card'
import { useContext } from 'react';
import {ContextGlobal} from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContext(ContextGlobal);

  return (
    <main style={{ background: state.theme.backgroundHome}}>
      <h1 style={{color:state.theme.color }}>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.data.map((item) => (
          <Card key={item.id} id={item.id} name={item.name} username={item.username}/>
        ))}
      </div>
    </main>
  )
}

export default Home