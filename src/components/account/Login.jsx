import React, { useContext,useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import AuthContext,{ axios_public,errorHandle } from "./AuthContext";
import { TextField,Button,Box,Alert } from "@mui/material";
import jwt_decode from "jwt-decode";



const Userlogin = () => {
 

  let {user, actionstatus } = useContext(AuthContext)
  const [status, setStatus]= useState({exist:false, msg:"",type:""});
  const [forget,setForget]=useState(0);
  const navigate= useNavigate();
  let {setUser}= useContext(AuthContext);

  const handleSubmit=(e)=>{
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const actualData= {
          email: data.get('email'),
          password: data.get('password')
      }
      if(actualData.email && actualData.password)
      {
          axios_public.post('jwt/create/', actualData)
          .then((response) => {
              setStatus({ exist: true, msg: 'Login Success.', type: 'success' });

              localStorage.setItem('authTokens', JSON.stringify(response?.data));
              setUser(jwt_decode(response?.data?.access));
              document.getElementById('login-form').reset();
              setTimeout(()=>{
                  navigate('/')
  
              },3000)
       


          })
          .catch((error) => {
              setStatus({ exist: true, msg: error.message + ".\n" + errorHandle(error), type: 'error' })

          });

   
          
      }else{
          setStatus({exist:true,msg:'All Fields are required.', type:'error'})
  
      }

      
  }


  if(!user)
  {
  return (
    
    <div className="d-flex justify-content-center">

      <form id="login-form" style={{width:'400px'}} onSubmit={handleSubmit}>
      <NavLink to="/home" className="btn-close m-2 float-end"  aria-label="Close"/>
      

        <h5>SignIn</h5>
        <div className="form-body">
        
        <TextField style={{backgroundColor:'white'}} margin='normal' required fullWidth id='email' name='email' type='email' label='Email Address'/>
        <TextField style={{backgroundColor:'white'}} margin='normal' required fullWidth id='password' name='password' type='password' label='Password'/>



        <div className="row mb-3">
          <div className="col d-flex justify-content-center">
{/* 
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="agree" id="check" defaultChecked/>
              Remember me
            </div>*/}
          </div>

          <div className="col">
            <NavLink to='/auth/sendpasswordresetemail'>Forgot Password?</NavLink>

          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" ><span></span>Sign in</button>
        </div>
        <div className="text-center">
          <span className="mb-0">Not a member? <NavLink to='/auth/register'>Register</NavLink></span>
{/* 
          <p>or sign up with:</p>
          <button type="button" className="btn btn-secondary btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-secondary btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-secondary btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-secondary btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>*/}
        </div>
        {status.exist ? <Alert severity={status.type}>{status.msg}</Alert> : ''}     
        {actionstatus?.status ? (<div className="alert alert-info mt-3" role="alert"> {actionstatus.message}</div>) : ''}

        </div>
      </form>
    </div>
  )}
  else{
    navigate("/home")
  }
}

export default Userlogin