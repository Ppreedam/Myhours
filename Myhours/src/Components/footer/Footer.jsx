import {  Text } from '@chakra-ui/react'
import React from 'react'
import style from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={style.main}>
    <div className={style.main1}>
      
     <div className={style.part1}>
    <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9236f9ab08c7bdf83fe75_Logo-300px.png" alt="MyHours" />
    <p>@2022 My Hours.</p>
    <p>All Rights reserved</p>
     </div>
     <div className={style.part2}>
      <h3 style={{fontSize:"25px"}}>Product</h3>
      <p>How it works</p>
      <p>Features</p>
      <p>Mobile app</p>
      <p>Use case collection</p>
      <p>Pricing</p>
      <p>Guides</p>
      <p>Customer Reviews</p>
      <p>Start Free</p>
     </div>
     <div className={style.part3}>
         <h3 style={{fontSize:"25px"}}>Use Cases</h3>
         <p>Project billing</p>
         <p>Time reports and Project analytics</p>
         <p>Attendance and Absence tracking</p>
         <p>Expense tracking</p>
         <p>Calculating project profitability</p>
         <p>Timesheet time tracking</p>
     </div>
     <div className={style.part3}>
      <h3 style={{fontSize:"25px"}}>Integrations</h3>
      <p>QuickBooks</p>
      <p>Zapier</p>
      </div>
      <div className={style.part4}>
      <h3 style={{fontSize:"25px"}}>Social</h3>
      <p>Facebook</p>
      <p>Twitter</p>
      </div>
  
    </div>
   
    <div className={style.main2}>
      <h1 style={{fontSize:"25px"}}>Looking for employee attendance and absence tracking? Visit <span>  <Text  as='u' fontSize= "30px" color='white'>All Hourse</Text></span> </h1>
    
    </div>

    </div>
  )
}

export default Footer