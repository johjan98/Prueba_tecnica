import React from "react";
import { useDate } from "../hooks/useDate";
import './header.css';

export function Header(){
  const {getDate, formatDate} = useDate();

  const [time, setTime] = React.useState("");
  
  function showTime(){
    setInterval(
      function(){
        setTime(formatDate(getDate()));
      }, 1000);
  }

  showTime();

  return(
    <div className="header">
      <h1 className="title">Serie de Fibonacci</h1>
      <p className="date">{ time }</p>
    </div>
  );
}