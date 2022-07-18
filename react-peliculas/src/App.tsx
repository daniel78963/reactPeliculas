import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [fecha, setFecha] = useState(new Date())
  useEffect(() => {
    const timerId = setInterval(() => {
    setFecha(new Date());
  }, 1000);

  //se debe limpiar el componente para no provocar memory lease
  return () => clearInterval(timerId);
  })

  return (
     // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
      
    // </div>
    <div>
        <h3>Ejemplo React</h3>
          <input />
          <div>{fecha.toString()}</div> 
    </div>
  );
}

export default App;
