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
  let text = "";
  const imageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png";
  const manageClick = () => console.log('Click');
  const manageKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    text = e.currentTarget.value;
  };

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

      <button onClick={manageClick} >hacer click</button>
      <br></br>
      <button onMouseEnter={() => console.log('entrando sobre el button...')}
        onClick={() => console.log('click con función anónima')} >hacer click - función anónima</button>
      <br></br>
      <input type="text" onKeyUp={(e) => manageKeyUp(e)}></input>
      <br></br>
      <div>
        {text}
      </div>
      <br></br>

      <img alt="Logo React" src={imageURL}></img>
      <div>
        <input type="checkbox" checked={true} />Este es un checkbox
      </div>
    </>
  );
}

export default App;
