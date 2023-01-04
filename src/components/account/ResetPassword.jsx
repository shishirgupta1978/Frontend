import React,{useState} from "react";
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios";

import  {NavLink}  from "react-router-dom";

const ResetPassword = () => {

  const [status, setStatus]= useState({exist:false, msg:"",type:""});
  const navigate= useNavigate();
  const handleSubmit=(e)=>{
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const actualData= {
          re_password: data.get('re_password'),
          password: data.get('password')
      }
      if(actualData.re_password && actualData.password  && actualData.re_password === actualData.password)
      {
          console.log(actualData);
          setStatus({exist:true,msg:'Change Password Successfully.', type:'success'})

          document.getElementById('change-password-form').reset();
          navigate('/')
      }else{
          setStatus({exist:true,msg:'All Fields are required.', type:'error'})
  
      }
      
  }

  return (
<>
<div className="d-flex justify-content-center">

<form className="h-50" id="change-password-form" onSubmit={handleSubmit}>
<NavLink to="/products" className="btn-close float-end p-2" aria-label="Close"/>
<h5>Reset Password</h5>
  
  <div className="form-body">
  
  <input className="form-control mb-2" required id='new_password' name='new_password' placeholder='New Password' type='password'/>
  <input className="form-control mb-3" required id='re_new_password' name='re_new_password' placeholder='New Confirm Password' type='password'/>

   
    <div className="col d-flex justify-content-center">
      <button type="submit" className="btn btn-secondary btn-block mb-4">Send</button>
    </div>
    </div>
</form>
</div>








  
</>
  )
   
}

export default ResetPassword