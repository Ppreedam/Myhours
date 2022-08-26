import React from 'react'
import style from "./Support.module.css"
import { Text } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Input,Button } from '@chakra-ui/react'
const Support = () => {
  return (
    <div>
      <div className={style.part1}>
      <Text fontSize="7xl" fontWeight="lighter" pl="20px" >We're here</Text>
      <Text fontSize="3xl" fontWeight="bold" color= "#507791" mt="30px" pl="20px">We typically respond in less than 
      24 hours on business days. Contact 
      us via email, live chat or the form below.
      </Text>
      <Text fontSize="2xl" fontWeight="lighter" pl="30px" mt="30px" mb="50px"> <span><Text as="u" color="#2cb1f0">Read our help guides</Text></span>  or send us
       a message to get detailed help.
        </Text>
      </div>
      <div className={style.part2}>
      <div>
      <video  width="100%" controls>
        <source
          src="https://share.descript.com/view/Wy9xHyM18c8"
           type="video/mp4"
        />
      </video>
      </div>
      </div>
      <div className={style.part3}>
      <Text fontSize="3xl" fontWeight="bold" color= "#507791" mt="30px" pl="20px">What do you need help with?
      </Text>
      <Select  bg="#f3f3f3">
  <option value='I have a question before signing up...'>I have a question before signing up...</option>
  <option value='I can not access the account...'> I can't access the account...</option>
  <option value='Something might be broken...'>Something might be broken...</option>
  <option value='I did like to request a feature...'>I'd like to request afeature...</option>
  <option value='other'>Other...</option>
</Select>
 <div style={{marginTop:"10px"}}>
  <label style={{fontSize:"23px" , fontWeight:"bold", color:"#e4e4e4"}}>Message</label>
 <Input placeholder='What your issue or question' />
 </div>
 <div style={{marginTop:"10px"}}>
  <label style={{fontSize:"23px" , fontWeight:"bold", color:"#e4e4e4"}}>Name</label>
 <Input placeholder='Enter your name' />
 </div>
 <div style={{marginTop:"10px"}}>
  <label style={{fontSize:"23px" , fontWeight:"bold", color:"#e4e4e4"}}>Email Address</label>
 <Input placeholder='Enter your email address' />
 </div>
 <Button colorScheme='blue' size='md' mb="50px" mt="20px" >Send</Button>
      </div>
    </div>
  )
}

export default Support