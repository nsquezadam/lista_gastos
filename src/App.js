import React from 'react';
// helmet nos permite  poner etiquetas   de html  como meta  tittle etc
import {Helmet} from 'react-helmet'
//import InicioSesion from './componentes/InicioSesion'
import {Header,
  Titulo,
  ContenedorHeader,
  ContenedorBotones } from './elementos/Header'
import Boton from './elementos/Boton' 

const App = () => {


  return (
    <>
    <Helmet>
      <title>Agregar Gasto</title>
    </Helmet>
    <Header>
      <ContenedorHeader>
        <Titulo>Agregar Gasto</Titulo>
        <ContenedorBotones>
          <Boton to="/categorias">Categorias</Boton>
          <Boton to="/lista">Lista de Gasto</Boton>
          <Boton>X</Boton>
        
        </ContenedorBotones>
      </ContenedorHeader>
    </Header>

      {/* <InicioSesion /> */}
    </>
  );
}

export default App;
