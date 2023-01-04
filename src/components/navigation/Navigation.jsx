import React from 'react'
import './Navigation.css'
import logo from './logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext,useState ,useEffect} from 'react';
import axios from 'axios';
import AuthContext from '../account/AuthContext';


const Navigation = () => {
      let {user, logoutUser}= useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [data,setData]=useState({})
  const client = axios.create({ baseURL: "http://127.0.0.1:8000/api/" });


  let myfun= ()=>{
    let reqInstance = client.create({
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('authTokens'))?.access}` },
        }
      );
     
  reqInstance.get('/users/me').then((response) => {
        setData(response.data);
  console.log(response.data);
    }).catch((error) => {return null });

  }

useEffect(()=>{
  myfun();

},[])


    return (
      <>
        <div className='dropdwn'>
            <nav>
                <img className='logo' src={logo} />
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    
                    <li><a href="#">Services <i className='fas fa-caret-down'></i></a> 
                        <ul>
                            <li><a href="#">BIM</a></li>
                                    <li><a href="#">REVIT(MEP) Modelling</a></li>
                                    <li><a href="#">HVAC CAD </a></li>
                                    <li><a href="#">Plumbing CAD</a></li>
                    
                        </ul>
                    </li>
            <li><a href="#">FAQs</a></li>  
            <li><NavLink to="/aboutus">About Us</NavLink></li> 
                 
            <li><NavLink to="/contactus">Contact Us</NavLink></li>
            
                { user ? (<li><a href="#"><img src={data?.profile?.pic ? data?.profile?.pic :"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAMFBMVEXk5ueutLewt7np6+ursbTh4+SzubzBxsjT1ti6v8Lc3+DIzM7X2tvM0NLFyczP09R8ZhjBAAAC4klEQVR4nO2a2XLrIAyGDcJsXvL+b3swdVO3dUCyJXJmyj+9ykX5RguSJYahq6urq6urq6urq6vr7wngnYcP0U8uBLcuc3wDCYzeaWU+pfQ6NyYYV5vOPcoY61sSTD/O3ymsb+QOmNUZQIYIYxOE6RXAxqBbhIQrEGwQD3FnhDJBA4YqQWJYRAkqXtglmJ3wQBEoJZcXI5JAWTEEiySQCwesG5K0kCvQRkhmmEQyc8EbQQlFJMEImxkECGaSEZTi9wSsNATDX6+AaASzsiNEIoIK7Ai0fNjMwI6AK1BHBPZgCESC1DdwI5BuhYywcqcllUApx4yArtNfCh1BAOFCLLAjkDOCPRwv3AsLN4IjI7C38sRanRDY+yZqxyLRyL+/WAMxJfirFOkrIiPwEwwjjYD9YkoCWtMiMm0hdY9WZs5BMINAC5+Fr5aGPyN3lWZt3xHEZhyAmDRlAsFpEy4xDXuZPmrGEIgFws5Qd4UVHgJDjcHIjbqeej0Eb+GFD42FvBAZrpwIltN1xDaHj632QzBMJ94wVn4If9Q4WXWwhTE6tF5Obfu5R9Cfeeh8m3XMb4zEkTS+ZVkJ6dAxxnn2+S9x5J9anZ7O9ouzVucYyFtKpbS1YfWbQeTP91Ow5jwpt5+DE91WQpzCi9O/gdh1FnEKxOXngrZAod3M7JJk/1AsDWe2eHDmKSQDUM7fKTTfDHihGeBoimnkcIfXFwEyhLpdOiEiO9bXEDffFAC6bS9B3Oli4pUoPGEwV981gOc4/wPiWm6wOOHJcMkZ5AVEmeFCa383E36JvMBlJ6B+4hAnKkhpCgFnJB6E/9BCv5SgCv/JHWUAFH4YCTx34jkDDoG8FKUgoMaRtBEnmQFRN6kbeqoQWSFrBIwZpI2AMYOu/5Obqn2Be2kjVO8n7HDzFkMFQZ6gNiInPxe5glDu6yVvxqfKTZx4Sm4qp2WDaEwqI+gGqrx/gxYqEnR1dXV1/S/6BzA0IDjtXgNsAAAAAElFTkSuQmCC"} alt="profilepic" width="32" height="32" className="rounded-circle"/> <i className='fas fa-caret-down'></i></a> 
                        <ul>
                        <li><NavLink to="/auth/changepassword">Change Password</NavLink></li>
      <li><NavLink to="/auth/profile">Update Profile</NavLink></li>
      <li><span  onClick={logoutUser} style={{marginLeft:'15px',color:"white",cursor:"pointer", lineHeight:'60px', fontSize:'16px'}}>Sign out</span></li>
                    
                        </ul></li>):<li><NavLink to="/auth/login">Login</NavLink></li>}
                
                

        </ul>


        </nav ></div >

{user ? (<div>
            <nav className='private'>
              <div className='container p-1'>
                <div className='row'>
                  <div className='col'>
                  <NavLink to="/auth/changepassword">Change Password</NavLink>
                  </div>
                  <div className='col'>
                  <NavLink to="/auth/changepassword">Change Password</NavLink>
                  </div>
                  <div className='col'>
                  <NavLink to="/auth/changepassword">Change Password</NavLink>
                  </div>
                  <div className='col'>
                  <NavLink to="/auth/changepassword">Change Password</NavLink>
                  </div>


                </div>
              </div>
                

        </nav ></div >
):""}

        </>
  )
}

export default Navigation