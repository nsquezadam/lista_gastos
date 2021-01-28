import React from 'react';
import styled from 'styled-components'
import {ReactComponent as Puntos} from '../imagenes/puntos.svg'



const Svg = styled.svg`
	height: 50vh;
	width: 100%;
	position: fixed;
	bottom: 0;
	z-index: 0;
	path {
		fill: rgba(135,182,194, .15);
	}
`;
// al componente de puntos queremos darles estos estilos 
const PuntosArriba = styled(Puntos)`
	position: fixed;
  z-index: 6;
	top: 1.8rem; /* 40px */
	left: 1.8rem; /* 40px */
`;

const PuntosAbajo = styled(Puntos)`
	position: fixed;
	z-index: 6;
	bottom: 1.8rem; /* 40px */
	right: 1.8rem; /* 40px */
`;



const Fondo = () => {
  return (
    <>
      <PuntosArriba />
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
      preserveAspectRatio="none">
      <path 
      fillOpacity="1" 
      d="M0,96L60,122.7C120,149,240,203,360,218.7C480,235,600,213,720,192C840,171,960,149,1080,154.7C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">

      </path>
      </Svg>
      <PuntosAbajo />
    </>
  );
}

export default Fondo;
