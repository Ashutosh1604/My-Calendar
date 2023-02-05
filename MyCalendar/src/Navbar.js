import { React} from 'react'
import { useAuth0 } from "@auth0/auth0-react";



const Navbar=()=> {

    const { loginWithRedirect,logout,isAuthenticated } = useAuth0();
  

  return (
    
 <nav className="w-full flex md:justify-center justify-between items-center p-4 bg-black">


 <div className=" flex md:flex-[0.5] flex-initial  items-center">

  <h1 className="text-[27px] text-white cursor-pointer ">MyCalendar</h1>
  
 </div>
 
 {/*list */}
 <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
{
     isAuthenticated ?(<li>
 <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>

     </li>):(
     <li>
 <button onClick={() => loginWithRedirect()} className="">Log In</button>
     </li>)
}




 </ul>


 </nav>
  )
}

export default Navbar