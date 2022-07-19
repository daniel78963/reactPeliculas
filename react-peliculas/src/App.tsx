import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <h1>Hola mundo</h1>
      <h3>{subtitulo.toUpperCase()}</h3>
      <h4>El doble de 3 es {duplicar(3)}</h4>
      <img alt="Logo React" src={imageURL}></img>
    </>
  );
}

export default App;
