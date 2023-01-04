import React, { useContext,useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { TextField, Alert } from "@mui/material";
import AuthContext,{axios_public,errorHandle} from "./AuthContext";

const SendPasswordResetEmail = () => {

  const [status, setStatus]= useState({exist:false, msg:"",type:""});
  const navigate= useNavigate();
  const handleSubmit=(e)=>{
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const actualData= {
          email: data.get('email'),
      }
      if(actualData.email)
      {

          axios_public.post('users/reset_password/', actualData)
          .then((response) => {
              setStatus({exist:true,msg:'Password Reset Email Send.', type:'success'});

              document.getElementById('sendpasswordresetmail-form').reset();
              setTimeout(()=>{
                  navigate('/auth/login')
  
              },3000)
       


          })
          .catch((error) => {
              setStatus({ exist: true, msg: error.message + ".\n" + errorHandle(error), type: 'error' })

          });

          

          
          
      }else{
          setStatus({exist:true,msg:'Email required.', type:'error'})
  
      }

      
  }



  return (
    <>
      <div className="d-flex justify-content-center">

        <form  style={{width:'400px'}} id="sendpasswordresetmail-form" onSubmit={handleSubmit}>
        <NavLink to="/auth/login" className="btn-close m-2 float-end"  aria-label="Close"/>
    

          <h5>Password Reset</h5>
          
          <div className="form-body">
          <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />

            <div className="col d-flex m-4 justify-content-center">
              <button type="submit">Send</button>
            </div>
            {status.exist ? <Alert severity={status.type}>{status.msg}</Alert> : ''}     

            </div>

        </form>
      </div>



    </>
  )

}

export default SendPasswordResetEmail