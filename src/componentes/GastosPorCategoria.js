import React from 'react';
// helmet nos permite  poner etiquetas   de html  como meta  tittle etc
import {Helmet} from 'react-helmet'
import BtnRegresar from '../elementos/BtnRegresar'

import {Header,Titulo} from '../elementos/Header'


const GastosPorCategoria = () => {
  return (
    <>
    <Helmet>
      <title>Gastos por Categorias</title>
    </Helmet>
    <Header>
        <BtnRegresar />
        <Titulo>Gastos por categoria</Titulo>
    </Header>

      {/* <InicioSesion /> */}
    </>
  );
}

export default GastosPorCategoria;
