import React from 'react'
import Lottie from 'react-lottie'
import { Header, H1, Design1, Design2 } from '../styles/components/Header'
import lottieMobile from '../Lottie/Mobile.json'

export default function HeaderComponent () {  
  
  const Options = {
    loop: true,
    autoplay: true,
    rendererSetting: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return(
    <>
    <Header>
      <H1>Empieza un debate o consulta lo que estas necesitando <br/>
        ¡Pregunta lo que quieras!</H1>
      <Lottie options={{ animationData: lottieMobile, ...Options }} width='60%' />
    </Header>
    <Design1></Design1>
    <Design2></Design2>
    </>
  )
} 