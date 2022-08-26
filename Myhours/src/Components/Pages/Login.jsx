import React from 'react'
import style from "./Login.module.css"
import {  Button,  Image,  Text ,Input} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
 const navigate=useNavigate()
 const[form,setForm]=useState({
    name:"",
    email:"",
    password:""
    
 })

 
 
 const formhandle=(e)=>{
    const {name,value} =e.target
    setForm({
       ...form,
       [name]:value
    })
}
    const createhandle=()=>{
    if(!form.name || !form.email || !form.password)
    {
        alert("Please fill the information")
    }
    else{

        localStorage.setItem("form",JSON.stringify(form))


        setForm({
          name:"",
          email:"",
          password:""
        })
        navigate("/sign")
    }
   
 }

 



    return (
    <div className={style.main}>
      
      <div className={style.part1}>
      <div style={{width:"150px"}} cursor= "pointer">
    <Image src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd37c83dfa3ccb0d2d9836f_myhours-logo.svg' alt='Dan Abramov' />
</div>
         <div>
          <Text fontSize="2xl" fontWeight="bold" mt="20px" mb="20px">Welcome to My Hours</Text>
         </div>
         <div>
          <Text fontSize="md" fontWeight="bold" mt="10px" >FULL NAME</Text>
          <Text>So we know what to call you in the app</Text>
          <Input variant='outline' name="name" value={form.name} placeholder='Enter the name' onChange={formhandle} />
         </div>
         <div>
          <Text fontSize="md" fontWeight="bold" mt="10px">EMAIL</Text>
          <Text>You will use this email to login</Text>
          <Input variant='outline' name="email" placeholder='Enter the email'  onChange={formhandle} value={form.email}  />
         </div>
         <div>
          <Text fontSize="md" fontWeight="bold" mt="10px" >PASSWORD</Text>
         <Input variant='outline' name="password" placeholder='Enter the name' type="password"   onChange={formhandle} value={form.password} />
         </div>
         <div>
          <Text mt="10px">By signing up you agree to the <span><Text as="u" color="blue">Terns of use</Text></span></Text>
         </div> 
         <div style={{textAlign:"center"}}>
          <Button colorScheme='blue' mt="60px" onClick={createhandle}>Create Account </Button>
          <br />
          
          <Text fontSize="lg" as="u" color="blue.400" cursor="pointer" onClick={()=>navigate("/sign")}>Back</Text>
         </div>

      </div>
    </div>
  )
}

export default Login
