import React from 'react'
import style from "./Sign.module.css"
import {  Button,  Image,  Text ,Input} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
const Sign = () => {
 const navigate=useNavigate()
 const[state,setState]=useState(false)
const [fail,setFail]=useState(false)
 const[detail,setDetail]=useState({
  email:"",
  password:""
 })
 
 
 const inputhandle=(e)=>{
      const{name,value}=e.target
      setDetail({
        ...detail,
        [name]:value
      })
 }

 const signhandle=({email,password})=>{
  const data = JSON.parse(localStorage.getItem("form"))

  if(email===data.email && password===data.password)
  {
   
    setState(true)
      setFail(false)
    setTimeout(()=>{
      setState(false)
      navigate("/works")
      
    },2000)
  }
  else{
  setFail(true)
  }
 }

 
 

 
 return (
    <div className={style.main}>
      
      <div className={style.part1}>
      <div style={{width:"250px",margin:"auto"}} cursor= "pointer">
    <Image src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd37c83dfa3ccb0d2d9836f_myhours-logo.svg' alt='Dan Abramov' />
</div>
         <div>
          <Text fontSize="2xl" fontWeight="bold" mt="20px" mb="20px">Sign in</Text>
         </div>
        
         <div>
          <Text fontSize="sm" fontWeight="bold" mt="10px" mb="10px">EMAIL</Text>
          
          <Input variant='outline'name="email" placeholder='Enter the email' onChange={inputhandle} />
         </div>
         <div>
          <Text fontSize="sm" fontWeight="bold" mt="10px" mb="10px">PASSWORD</Text>
         <Input variant='outline' name="password" type="password" placeholder='Enter the name'  onChange={inputhandle}/>
         </div>
         <div>
          <Text mt="10px">By signing  you agree to the <span><Text as="u" color="blue">Terns of use</Text></span></Text>
         </div> 
         <div>
          {
            state? <Text color="green">Sign in Sucessfully</Text> : ""
          }
          {
            fail ? <Text color="red">Email & Password doesn't match</Text> :""
          }
          
         </div>
         <div style={{display:"flex" ,justifyContent:"space-between",marginTop:"30px",borderBottom:"1px solid ",paddingBottom:"30px"}}>
          <Button colorScheme='blue' size="md" onClick={()=>signhandle(detail)}>Sign in </Button>
          <Text as="u" color="blue.400" cursor="pointer">Reset Password</Text>
         </div>
         <div style={{marginTop:"30px"}}>
              <Text fontSize="lg" as="u" color="blue.400" cursor="pointer" onClick={()=>navigate("/login")} >New to My Hours? Sign up</Text>
         </div>
      </div>
    </div>
  )
}

export default Sign