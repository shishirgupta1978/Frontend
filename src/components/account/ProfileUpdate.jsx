import React, {useEffect,useState, useRef} from 'react'
import { TextField, Button, Box, Alert, Checkbox, MenuItem, FormControlLabel } from "@mui/material";

import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';

import './images/log.png';
import './images/noprofile.png';

const ProfileUpdate = () => {

    const [data, setData] = useState({})
    const [file, setFile] = useState({})
    const ref = useRef();
    const client = axios.create({ baseURL: "http://127.0.0.1:8000/api/" });
    const navigate = useNavigate()

    let reqInstance = client.create({
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('authTokens')).access}` },
        }
      );

  let getApidata= ()=>{
     
  reqInstance.get('/users/me').then((response) => {
        setData(response?.data?.profile);
        setFile(response?.data?.profile?.pic)
  console.log(response.data);
    }).catch((error) => {return null });

  }


    let handleInputChange = (e) => {
        setData((prevState) => ({ ...prevState, [e.target.getAttribute("id")]: (e.target.value || e.target.value === '') ? e.target.value : URL.createObjectURL(e.target.files[0]) }));
    }


    let handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('firstname', e.target.firstname.value);
        formData.append('lastname', e.target.lastname.value);
        
        if (e.target.pic?.value) {

            formData.append('pic', e.target.pic.files[0], e.target.pic.files[0].name);
        }
        if (e.target.document.value) {

            formData.append('document', e.target.document.files[0], e.target.document.files[0].name);
        }

        
        reqInstance.patch("http://127.0.0.1:8000/api/profile/", formData).then(() => {
                setData({});
                
                e.target.firstname.value = '';
                e.target.lastname.value = '';
                
                getApidata();
                navigate('/auth/helpdesk')



            }).catch((error) => { alert(error.message) })



    }

    useEffect(()=>{
        getApidata();
      
      },[])
      
    return (
        <div className='container-fluid d-flex justify-content-center'>
            
                <form onSubmit={handleSubmit} style={{width:'400px'}}>
                    <NavLink to="/home" className="btn-close float-end m-2" aria-label="Close" />


                    <h5>Update Profile</h5>
                    <div className='form-body'>
                    <div className='d-flex justify-content-center'>

                        <label htmlFor="pic"><img className="avatar" style={{ width: '100px', height: '100px' }} alt="ProfilePic" src={file ? file : require('./images/noprofile.png')} /></label>
                    </div> <input style={{ visibility: 'hidden' }} type="file" accept="image/png, image/jpeg" id="pic" onChange={(e)=>{setFile(URL.createObjectURL(e.target.files[0]))}} name="pic" />


                    {data.id ? <input type="hidden" id="id" name="id" placeholder='id' value={data.id} disabled /> : ""}

                    <TextField margin='normal' required fullWidth type="text" id="firstname" name="firstname" label='First Name' onChange={(e) => { handleInputChange(e) }} value={data.firstname ? data.firstname : ""}/>

                    <TextField margin='normal' required fullWidth type="text" id="lastname" name="lastname" label='Last Name' onChange={(e) => { handleInputChange(e) }} value={data.lastname ? data.lastname : ""}/>

                    <TextField margin='normal' fullWidth type="file" id="document" ref={ref} name="document" label='Add Document' InputLabelProps={{ shrink: true}}/>

                    

                    <div className='d-flex justify-content-center'><button type="submit" >Update</button></div>
                    </div><br/>
                </form></div>
         
            
    )
}

export default ProfileUpdate