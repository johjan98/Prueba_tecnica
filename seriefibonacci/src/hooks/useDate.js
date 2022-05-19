import React from "react";

export function useDate(){

  const getDate = () => {

    let today = new Date();
    let time = [];
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    time.push(hour);
    time.push(minute);
    time.push(second);

    return time;
  }

  const formatDate = (time) =>{
    let date = "";

    if(time[1] < 10 && time[2] < 10){
      date = time[0]+":0"+time[1]+":0"+time[2];
    }else if(time[1] > 10 && time[2] < 10){
      date = time[0] + ":" + time[1] + ":0" + time[2];
    }else if(time[1] < 10 && time[2] > 10){
      date = time[0] + ":0" + time[1] + ":" + time[2];
    }else{
      date = time[0] + ":" + time[1] + ":" + time[2];
    }

    return date;
  } 

  return {getDate, formatDate}
}