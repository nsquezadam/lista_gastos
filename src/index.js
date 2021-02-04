import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader'
import Contenedor from './elementos/Contenedor';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// helmet nos permite  poner etiquetas   de html  como meta  tittle etc
import {Helmet} from 'react-helmet'

import InicioSesion from './componentes/InicioSesion'
import EditarGasto from './componentes/EditarGasto'
import GastosPorCategoria from './componentes/GastosPorCategoria'
import ListaDeGastos from './componentes/ListaDeGastos'
import RegistroUsuarios from './componentes/RegistroUsuarios'
import Presupuesto from './componentes/Presupuesto'
import Fondo  from './elementos/Fondo'
import Favicon from './imagenes/logo.svg'



WebFont.load({
    google: {
      //Work+Sans:wght@400;500;700
      families: ['Work Sans:400,500,700', 'sans-serif']
    }
  });

const Index = () =>{
  return(
  <>
    <Helmet>
      <link rel="shortcut icon" type="image/x-icon" href={Favicon}/>
      {/* <title>Gastos</title> */}
    </Helmet>
    <BrowserRouter>
    <Contenedor>
      <Switch>
        <Route path="/iniciar-sesion" component={InicioSesion}/>
        <Route path='/crear-cuenta' component={RegistroUsuarios}/>
        <Route path='/presupuesto' component={Presupuesto}/>
        <Route path='/categorias' component={GastosPorCategoria}/>
        <Route path='/lista' component={ListaDeGastos}/>
        <Route path='/editar/:id' component={EditarGasto}/>
        <Route path='/' component={App}/>
      </Switch>
      
    </Contenedor>
    </BrowserRouter>
  <Fondo />
    </>
   
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));

