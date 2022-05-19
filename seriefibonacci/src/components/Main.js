import React from "react";
import { useFibonacci } from "../hooks/useFibonacci";
import './main.css';

export function Main(){

  const [serie, setSerie] = React.useState("");
  const { fibonacci } = useFibonacci();

  const getFibonacci = () =>{
    setSerie(fibonacci);
  }

  return(
    <React.Fragment>
      <section>
        <button className="botton" onClick={getFibonacci}>Calcula la serie</button>
      </section>    
      <h2>Serie de Fibonacci:</h2>
      <section class="fibonacci">
        <p id="serie">{ serie } </p>
      </section>
    </React.Fragment>
  )
}