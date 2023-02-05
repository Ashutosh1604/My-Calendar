import React from 'react';
import EventItem from './EventItem';



function ListOfEvents(props) {
  return (
 <div className="flex flex-col w-full justify-center items-center md:p-20 py-12 px-4 gradient-bg mb-10  ">
<h1 className="text-3xl md:text-5xl text-white ">List Of Events</h1>
<div className="flex flex-wrap justify-center items-center  ">
    {
        
            props.allEvents.map((event)=>{
              return <EventItem event={event} key={event.sno} onDelete={props.onDelete} />
            })
    }

</div>
 </div>
  )
}

export default ListOfEvents