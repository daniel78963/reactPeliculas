import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppCss from './App.module.css'

function App() {
  // const [fecha, setFecha] = useState(new Date())
  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //   setFecha(new Date());
  // }, 1000);

  // //se debe limpiar el componente para no provocar memory lease
  // return () => clearInterval(timerId);
  // })

  const subtitulo = "Este es un subtitulo";
  const duplicar = (valor: number) => valor * 2;
  const imageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png";
  const cuadroAzul = {
    backgroundColor: 'blue',
    height: '50px',
    width: '50px',
    marginLeft: '1rem'
  }

  return (
  //    // <div className="App">
  //   //   {/* <header className="App-header">
  //   //     <img src={logo} className="App-logo" alt="logo" />
  //   //     <p>
  //   //       Edit <code>src/App.tsx</code> and save to reload.
  //   //     </p>
  //   //     <a
  //   //       className="App-link"
  //   //       href="https://reactjs.org"
  //   //       target="_blank"
  //   //       rel="noopener noreferrer"
  //   //     >
  //   //       Learn React
  //   //     </a>
  //   //   </header> */}
      
  //   // </div>
  //   <div>
  //       <h3>Ejemplo React</h3>
  //         <input />
  //         <div>{fecha.toString()}</div> 
  //   </div>
    <>
      <h1 className='rojo'>Hola mundo</h1>
      <div className='cuadraroRojo'></div>
      <div style={cuadroAzul}></div>
      <h3 style={{color: 'blue'}}>{subtitulo.toUpperCase()}</h3>
      <h4>El doble de 3 es {duplicar(3)}</h4>
      
      <h4 className={AppCss.color}>App.module.css</h4>
      <img alt="Logo React" src={imageURL}></img>
      <div>
        <input type="checkbox" checked={true} />Este es un checkbox
      </div>
    </>
  );
}

export default App;
