import React, { useState } from 'react';



function AddEventForm(props) {

    
const [title,setTitle]=useState("");
const [start,setStart]=useState("");
const [end,setEnd]=useState("");


const handleOnChangeTitle=(e)=>{
    setTitle(e.target.value)
}

const handleOnChangeStart=(e)=>{
    setStart(e.target.value)
}

const handleOnChangeEnd=(e)=>{
    setEnd(e.target.value)
}






const submit=(e)=>{
e.preventDefault();

if(!title||!start||!end)
{
   
    alert("field missing!!")
}
else
{
    
 props.addEvent(title,start,end);
 
 setTitle("");
 setStart("");
 setEnd("");
}
}
  return (
    <>
         <div className="flex flex-col justify-center items-center h-[250px] w-full mt-[100px] ">

        <h1 className="text-3xl md:text-5xl   ">Calendar</h1>
      <h2 className="text-2xl md:text-3xl ">Add new Event</h2>
      <form className="py-[50px] text-2xl flex flex-col justify-center items-center w-full " onSubmit={submit}>
   

    <div >

        <label htmlFor="title">Enter Event title: </label>
        <input className="px-[3px] bg-[grey] m-[2px] rounded-md" id="title" type="text"  value={title} onChange={handleOnChangeTitle} placeholder="Title"/>
    </div>

    <div>

<label htmlFor="start">Enter starting Day: </label>
<input className="px-[3px] bg-[grey] m-[2px] rounded-md" id="start" type="date" value={start} onChange={handleOnChangeStart} placeholder="Start"/>
</div>

<div>

<label htmlFor="end">Enter ending day: </label>
<input className="px-[3px] bg-[grey] m-[2px] rounded-md" id="end" type="date" value={end} onChange={handleOnChangeEnd} placeholder="End"/>
</div>


    
<button type="submit" className="flex flex-row justify-center 
        items-center mb-[80px] text-white bg-[#2952e3] p-1 px-5 rounded-full cursor-pointer hover:bg-[#2546bd]">Submit</button>

      </form>
         </div>
 
    </>
  )
}

export default AddEventForm