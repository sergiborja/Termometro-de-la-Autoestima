import React, { useEffect, useState } from "react";
import './Home.sass'
import { frases } from '../constants/palabras-niños'
import {Link} from 'react-router-dom'

function Home({userName}) {

  let randomSentence = frases[Math.floor(frases.length * Math.random())];

  const dateNow = new Date()

  return (
    <section className='homeContainer'>
      {userName && <h1 className='homeContainer__title'>Bienvenido al termometro de la autoestima {userName}</h1>}
      {/* {user && !user.mood && <h1 className='homeContainer__title'>Bienvenido al termometro de la autoestima, {user.name} </h1>}
      {user && user.mood[user.mood.length-1].score <5 && <h1 className='homeContainer__title'>Hoy será un buen día, {user.name} </h1>} */}
      <p className='homeContainer__text'>{randomSentence.sentence}<br /><br />{randomSentence.author}</p>
      <Link className='homeContainer__setMoodLink' to={'/set-mood'}>PUNTÚA CÓMO ESTÁ TU AUTOESTIMA</Link>
    </section>
  );
}

export default Home;
