import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom';
import { TextField,Button,Box,Alert } from "@mui/material";

const ChangePassword = () => {
    const [error,setError] = useState({
        status:false,
        msg:"",
        type:""
    })

    const handelChange = e =>{
        setError({...error,[e.target.name]:e.target.value});

    };


    const handleSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData={
        password:data.get('password'),
        confirmpassword:data.get('confirmpassword')
    }
    if(actualData.password && actualData.password===actualData.confirmpassword){
        document.getElementById('password-change-form').reset()
        setError({status:true, msg:"Password changed successfully.", type:'success'})
    }else{
        setError({status:true, msg:"Please enter valid password.", type:'error'})

    }

}

  return (
    <>

<div className="d-flex justify-content-center">
      
      <form onChange={handelChange} style={{width:'400px'}} id="password-reset-form" onSubmit={handleSubmit}>
      <NavLink to="/home" className="btn-close float-end m-2" aria-label="Close"/>
      
      <h5>Change Password</h5>
<div className='form-body'>  
<TextField margin='normal' required fullWidth id='password' name='password' type='password' label='New Password'/>
<TextField margin='normal' required fullWidth id='confirmpassword' name='confirmpassword' type='password' label='Confirm New Password'/>

      
        <div className="mt-3 d-flex justify-content-center">
        <button type="submit">Update</button>
        </div>
        {error.status ? <p>{error.type}:{error.msg}</p> : ''}
        </div>
      </form>
      </div>



</>

  )
}

export default ChangePassword