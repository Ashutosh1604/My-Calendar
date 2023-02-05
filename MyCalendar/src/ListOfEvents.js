import React from 'react';
import EventItem from './EventItem';

import { useAuth0 } from "@auth0/auth0-react";


function ListOfEvents(props) {
  const { isAuthenticated } = useAuth0();
  return (
 <div className="flex flex-col w-full justify-center items-center md:p-20 py-12 px-4 gradient-bg mb-10  ">
{ isAuthenticated?(<h1 className="text-3xl md:text-5xl text-white ">List Of Events</h1>):(<h1 className="text-3xl md:text-5xl text-white ">Login to see list of events</h1>)}
<div className="flex flex-wrap justify-center items-center  ">
    {
        
        isAuthenticated &&    props.allEvents.map((event)=>{
              return <EventItem event={event} key={event.sno} onDelete={props.onDelete} />
            })
    }

</div>
 </div>
  )
}

export default ListOfEvents
