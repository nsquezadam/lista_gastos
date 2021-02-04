import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {Header,Titulo,ContenedorHeader} from '../elementos/Header'
import {Formulario,Input,ContenedorBoton} from './../elementos/ElementosDeFormulario'
import Boton from './../elementos/Boton'
import {ReactComponent as SvgLogin} from './../imagenes/login.svg'



const Svg = styled(SvgLogin)`
width:100%;
max-height:12.5rem; /*100*/

margin-bottom:1.25rem; /* 20px*/ 


`;


const InicioSesion = () => {
  return (
    <>
    
    <Helmet>
      <title>Iniciar Sesion</title>
    </Helmet>
    <Header>

      <ContenedorHeader>
        <Titulo>Iniciar Sesion</Titulo>
        <div>
        <Boton to="/crear-cuenta">Registrase</Boton>
        </div>
      </ContenedorHeader>
    </Header>
    <Formulario>
      <Svg />
      <Input 
      type="email" 
      name="email" 
      placeholder="Correo Electronico"
     //  value={}
     //  onChange={}
     />
      <Input 
      type="password" 
      name="password" 
      placeholder="Contraseña"
     //  value={}
     //  onChange={}
     />
     
     <ContenedorBoton>
     <Boton  as="button"primario type="submit">Crear Cuenta</Boton>
     </ContenedorBoton>
    
    </Formulario>
   </>
  );
}

export default InicioSesion;
