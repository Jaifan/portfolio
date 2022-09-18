import "../styles/Contact.css"
import React,{useState} from 'react'
import Box from "@mui/material/Box";
import TextFrield from "@mui/material/TextField";
import axios from 'axios';




export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [deliverd, setDeliverd] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  


  
  const handleSubmit= async(e)=> {
    e.preventDefault()
    if(name && email && msg && !deliverd){
      const data = {
        name : name,
        email : email,
        msg : msg
      }
      try{
        const res = await axios.post("https://mail-server-system-jaifan.herokuapp.com/api/mail", data);
        setDeliverd(true);
      }catch(err){
        console.log(err);
        setErrorMsg(true);
      }
  }else{
    setErrorMsg(true);
  }
}


  return (
    <div className="contactContainer">
      <div className="contacttitle">
        <p>Contact</p>
      </div>
      <div>
        <Box className="contactcard"
        onSubmit ={handleSubmit}
        component='form'
        sx={{
          '& .MuiTextField-root' : {m:2, width: '50ch'},
        }}
        noValidate
        autoCompelte='off'>
          <TextFrield
          onChange={(e)=> setName(e.target.value)}
          className="contacttf"
          required
          id="outlined-required"
          label="Full Name"
          type="text"
          />
          <TextFrield
          onChange={(e)=> setEmail(e.target.value)}
          className="contacttf"
          required
          id="outlined-required"
          label="Email Address"
          type="email"
          />
          <TextFrield
          onChange={(e)=> setMsg(e.target.value)}
          className="contacttf"
          required
          id="outlined-required"
          label="Message"
          multiline
          rows={4}
          type="text"
          />
        <button className="contactbutton" type="submit">Sent Message</button>
        </Box>
        { deliverd && (<p className="contactcard4">Messgae Delivered!</p>)}
        { errorMsg && (<p className="contactcard4">Not Delivered! Something going wrong..!</p>)}

      </div>

      <div className="contactcard3">
        <h3>Or , Email : jafranbinzakaria@gmail.com</h3>
      </div>

    </div>
  )
}
