import React, { useEffect, useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { axios_public,errorHandle } from "./AuthContext";
import { Alert } from "@mui/material";


const ActivationSuccess = () => {
    let { uid,token} = useParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState({ exist: false, msg: "", type: "" }); 
    useEffect(() => {
        
        axios_public.post("/users/activation/", {'uid':uid,'token':token})
        .then((resonse) => {
                        
          setStatus({ exist: true, msg: 'User activated Successfully.', type: 'success' });
          setTimeout(() => {
            navigate('/auth/login')

        }, 3000)


      })
      .catch((error) => {
          setStatus({ exist: true, msg: error.message + ".\n" + errorHandle(error), type: 'error' })

      });

  
       
    },[uid,token, navigate]);

  return (
    <div>{status.exist ? <pre><Alert severity={status.type}>{status.msg}</Alert></pre> : ''}</div>
  )
}

export default ActivationSuccess