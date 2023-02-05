//npm i react-big-calendar react-datepicker date-fns

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState,useEffect } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import AddEventForm from "./AddEventForm";
import ListOfEvents from "./ListOfEvents";
import Navbar from "./Navbar";

const locales = {
    "en-IN": require("date-fns/locale/en-IN"),
};


const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});




const App=()=> {

     let initEvents;

if(localStorage.getItem("allEvents")===null)
{
initEvents=[];
}
else
{
  initEvents=JSON.parse(localStorage.getItem("allEvents"));

}


  const [allEvents, setAllEvents] = useState(initEvents);
 


const addEvent =(title,start,end)=>{
  let sno;  

  if(allEvents.length===0)    
  {
   sno=0;   
  }
  else{

    sno=allEvents[allEvents.length-1].sno +1;  
  }




  const newEvent={
    sno:sno,
title:title,
start:start,
end:end
  }

  setAllEvents([...allEvents,newEvent]);
 
 
}


const onDelete=(event)=>{
  setAllEvents(allEvents.filter((e)=>{
                return e!==event;
  }));

}





useEffect(() => {
  localStorage.setItem("allEvents",JSON.stringify(allEvents))    

}, [allEvents])


  return (
    <>
    <div className="min-h-screen ">
      <Navbar/>
 
      <AddEventForm addEvent={addEvent}  />
    <div className="App h-[500px] m-[50px]">
        <ListOfEvents allEvents={allEvents} onDelete={onDelete} />
       <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end"/>
    </div>
    </div>
    </>
  );
}

export default App;
