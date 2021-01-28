import React from 'react';
import {Helmet} from 'react-helmet'
import BtnRegresar from '../elementos/BtnRegresar'
import {Header,Titulo} from '../elementos/Header'

const ListaDeGastos = () => {
  return (
    <>
      <Helmet>
      <title>Lista de Gastos</title>
    </Helmet>
    <Header>
    
        <BtnRegresar />
        <Titulo>Lista de Gasto</Titulo>
      
  
    </Header>
    </>
  );
}

export default ListaDeGastos;
<h3>Lista de gastos</h3>