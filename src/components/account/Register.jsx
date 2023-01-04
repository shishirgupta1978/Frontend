import React, { useContext,useState } from "react";
import { TextField, Button, Box, Alert, Checkbox, MenuItem, FormControlLabel } from "@mui/material";

import { NavLink,useNavigate } from "react-router-dom";
import AuthContext,{ axios_public,errorHandle } from "./AuthContext";


const Register = () => {
  const [status, setStatus] = useState({ exist: false, msg: "", type: "" });
  const navigate = useNavigate();
  const handleSubmit = (e) => {

      setStatus({ exist: false, msg: "", type: "" });

      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const actualData = {
          username: data.get('username')?.toLowerCase(),
          email: data.get('email').toLowerCase(),
          date_of_birth: data.get('date_of_birth'),
          gender: data.get('gender')?.toLowerCase(),
          tnc: data.get('tnc'),
          password: data.get('password'),
          re_password: data.get('re_password')
      }
      if (actualData.email && actualData.password && actualData.username && actualData.re_password && actualData.date_of_birth && actualData.gender && actualData.tnc !== null) {

          if (actualData.password === actualData.re_password) {

              axios_public.post('users/', actualData)
                  .then((resonse) => {
                      
                      setStatus({ exist: true, msg: 'User Registered, please check activation mail.', type: 'success' });

                      document.getElementById('registration-form').reset();
                      setTimeout(() => {
                          navigate('/auth/login')

                      }, 3000)



                  })
                  .catch((error) => {
                      setStatus({ exist: true, msg: error.message + ".\n" + errorHandle(error), type: 'error' })

                  });



          } else {
              setStatus({ exist: true, msg: 'Password and Confirm Password does not match.', type: 'error' })
          }

      } else {
          setStatus({ exist: true, msg: 'All Fields are required.', type: 'error' })

      }


  }

  return (
    <>
      <div className="d-flex justify-content-center">

        <form style={{ width:'400px' }} id="registration-form" onSubmit={handleSubmit}>
        <NavLink to="/auth/login" className="btn-close m-2 float-end"  aria-label="Close"/>

          <h5>Sign Up</h5>
          <div className="form-body">
          
          <TextField margin='normal' required fullWidth id='username' name='username' label='Username' />
          <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
          <div className="row">
            <div className="col-6"><TextField margin='normal' required sx={{ width: '100%' }} id='date_of_birth' name='date_of_birth' InputLabelProps={{ shrink: true, required: true }}
              type="date" label='Date of Birth' />
            </div>
            <div className="col-6">                                <TextField margin='normal' required sx={{ width: '100%' }} id='gender' select name='gender' label='Gender' defaultValue="">

              <MenuItem value={'m'}>Male</MenuItem>
              <MenuItem value={'f'}>Female</MenuItem>
              <MenuItem value={'o'}>Transgender</MenuItem>
            </TextField>
            </div>
          </div>
          <div className="row">
            <div className="col-6"><TextField margin='normal' required fullWidth id='password' name='password' type='password' label='Password' /></div>
            <div className="col-6">          <TextField margin='normal' required fullWidth id='re_password' name='re_password' type='password' label='Confirm Password' />
</div>
          </div>


          <input type="checkbox" className="form-check-input m-2" value="agree" name="tnc" id="tnc" required /> I agree to <NavLink to='/auth/tnc'>term and conditions.</NavLink>


           
            <div className="d-flex justify-content-center">
              <button type="submit">Register</button>
            </div>
            {status.exist ? <Alert severity={status.type}>{status.msg}</Alert> : ''}     


          </div>
        </form>
      </div>

    </>
  )
}

export default Register