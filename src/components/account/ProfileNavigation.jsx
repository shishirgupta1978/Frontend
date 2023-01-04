import React, {useContext,useEffect} from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from "./AuthContext";
import axios from 'axios';

const ProfileNavigation = () => {
  const [data,setData]=useState({})
  let { logoutUser } = useContext(AuthContext)
  const client = axios.create({ baseURL: "http://127.0.0.1:8000/api/" });


  let myfun= ()=>{
    let reqInstance = client.create({
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('authTokens')).access}` },
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
    <div className="dropdown text-end">
    <a href="/auth/profile" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">

    {data?.username}  <img src={data?.profile?.pic ? data?.profile?.pic :"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAMFBMVEXk5ueutLewt7np6+ursbTh4+SzubzBxsjT1ti6v8Lc3+DIzM7X2tvM0NLFyczP09R8ZhjBAAAC4klEQVR4nO2a2XLrIAyGDcJsXvL+b3swdVO3dUCyJXJmyj+9ykX5RguSJYahq6urq6urq6urq6vr7wngnYcP0U8uBLcuc3wDCYzeaWU+pfQ6NyYYV5vOPcoY61sSTD/O3ymsb+QOmNUZQIYIYxOE6RXAxqBbhIQrEGwQD3FnhDJBA4YqQWJYRAkqXtglmJ3wQBEoJZcXI5JAWTEEiySQCwesG5K0kCvQRkhmmEQyc8EbQQlFJMEImxkECGaSEZTi9wSsNATDX6+AaASzsiNEIoIK7Ai0fNjMwI6AK1BHBPZgCESC1DdwI5BuhYywcqcllUApx4yArtNfCh1BAOFCLLAjkDOCPRwv3AsLN4IjI7C38sRanRDY+yZqxyLRyL+/WAMxJfirFOkrIiPwEwwjjYD9YkoCWtMiMm0hdY9WZs5BMINAC5+Fr5aGPyN3lWZt3xHEZhyAmDRlAsFpEy4xDXuZPmrGEIgFws5Qd4UVHgJDjcHIjbqeej0Eb+GFD42FvBAZrpwIltN1xDaHj632QzBMJ94wVn4If9Q4WXWwhTE6tF5Obfu5R9Cfeeh8m3XMb4zEkTS+ZVkJ6dAxxnn2+S9x5J9anZ7O9ouzVucYyFtKpbS1YfWbQeTP91Ow5jwpt5+DE91WQpzCi9O/gdh1FnEKxOXngrZAod3M7JJk/1AsDWe2eHDmKSQDUM7fKTTfDHihGeBoimnkcIfXFwEyhLpdOiEiO9bXEDffFAC6bS9B3Oli4pUoPGEwV981gOc4/wPiWm6wOOHJcMkZ5AVEmeFCa383E36JvMBlJ6B+4hAnKkhpCgFnJB6E/9BCv5SgCv/JHWUAFH4YCTx34jkDDoG8FKUgoMaRtBEnmQFRN6kbeqoQWSFrBIwZpI2AMYOu/5Obqn2Be2kjVO8n7HDzFkMFQZ6gNiInPxe5glDu6yVvxqfKTZx4Sm4qp2WDaEwqI+gGqrx/gxYqEnR1dXV1/S/6BzA0IDjtXgNsAAAAAElFTkSuQmCC"} alt="profilepic" width="32" height="32" className="rounded-circle"/>
    </a>
    <ul className="dropdown-menu text-small pe-4" aria-labelledby="dropdownUser1">
      <li><NavLink to="/auth/changepassword" className="dropdown-item">Change Password</NavLink></li>
      <li><NavLink className="dropdown-item" to="/auth/profile">Profile</NavLink></li>
      <li><hr className="dropdown-divider"/></li>
      <li onClick={logoutUser} className="dropdown-item ms-3">Sign out</li>
    </ul>
  </div>
  )
}

export default ProfileNavigation