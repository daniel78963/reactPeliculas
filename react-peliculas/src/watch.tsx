import { useState, useEffect } from "react";

export default function ExampleWatch(){
    const [fecha, setFecha] = useState(new Date())
    useEffect(() => {
      const timerId = setInterval(() => {
      setFecha(new Date());
    }, 1000);
  
    //se debe limpiar el componente para no provocar memory lease
    return () => clearInterval(timerId);
    })
    
    return(
        <div>
        <h3>Ejemplo React</h3>
          <input />
          <div>{fecha.toString()}</div> 
    </div>
    )
}