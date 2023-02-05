import React from 'react'

function events(props) {
  return (
  <>
  <div className=' text-white flex flex-col flex-1 m-4  border-2px justify-center items-center border-2 bg-black border-black w-full p-4 rounded-md hover:shadow-2xl bg-[#181918]2xl:min-w-[400px] 2xl:max-w-[500px] sm:min-w-[300px] sm:max-w-[350px] min-w-[270px] '>
     <h4 className="">Event:   {props.event.title}</h4>
     <p className="">Start date: {props.event.start}</p>
     <p className="">End date: {props.event.end}</p>
    

    

     <button className="flex flex-row justify-center 
        items-center mb-4 bg-[#9f3924] text-white p-2 mt-4 px-5 rounded-full cursor-pointer hover:bg-[#a04115]" onClick={()=>{props.onDelete(props.event)}}>Delete</button>
        
     
  

    </div>
    <hr/>
  </>
  )
}

export default events