import React from 'react'
import style from "./Usecase.module.css"
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
const Usecase = () => {
  return (
    <div>
     <div className={style.part1}>
      <Text fontSize="6xl" fontWeight="lighter" >Use cases</Text>
      <Text fontSize="4xl" fontWeight="bold" color= "#507791" mt="30px">& how My Hours solves problems</Text>
      <Text fontSize="3xl" fontWeight="lighter" pl="30px" mt="30px" mb="50px">From tracking time, to reporting 
        and invoicing your clients, My Hours 
        is there for you the whole time.
        </Text>
        <Button colorScheme='blue' size='lg' mb="50px" >Get Started - It's Free</Button>
     </div>
  <div className={style.part2}>
    <div style={{backgroundColor:"#f5f9fc"}}>
      <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fbf86f7f19477d80b3be5ec_Billable%20settings-p-500.png" alt="" />
      <Text fontSize="3xl" color= "#507791" fontWeight="bold" ml="20px">Project billing</Text>
      <Text fontSize="xl" ml="20px" mb="20px" >Chosse the billing method that is fair for your client 
        and  represent your work.
      </Text>
    </div>
    <div style={{backgroundColor:"#effbf3", height:"400px" ,border:"1px solid #a6f0c1"}}>
      <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png" alt="" />
      <Text fontSize="3xl" color= "#507791" fontWeight="bold" ml="20px">Expense tracking</Text>
      <Text fontSize="xl" ml="20px"  >Get expense of your mind and into your invoice, without
      losingg a cent or a receipt
      </Text>
    </div>
       <div style={{backgroundColor:"#fffcf2",height:"500px"}}>
      <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc0abed0af890cbb40c6d33_HP-3-1-p-500.png" alt="" />
      <Text fontSize="3xl" color= "#507791" fontWeight="bold" ml="20px">Time report & Project analytics</Text>
      <Text fontSize="xl" ml="20px">Always know how much time has been spent on your project
      and tasks in a specific period of time with easy-to-create
      report
      </Text>
    </div>
    <div style={{backgroundColor:"#effbf3"}}>
      <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6828a88f435b7c4ac2a_HIW-4-p-500.png" alt="" />
      <Text fontSize="3xl" color= "#507791" fontWeight="bold" ml="20px" >Attendance & Absence</Text>
      <Text fontSize="xl" ml="20px" mb="20px">Know who was present at work and track absences and the reasons 
      behind them. Make your payroll faster and more accurate by exporting all the tracked data. Time, attendance, 
      and absence tracking in one streamlined solution.
      </Text>
    </div>
    <div style={{backgroundColor:"#fffcf2",height:"500px"}}>
      <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png" alt="" />
      <Text fontSize="3xl" color= "#507791" fontWeight="bold" ml="20px">Calculating project profitability</Text>
      <Text fontSize="xl" ml="20px" >Grow your business faster by prioritizing the projects 
      that are worth your time, effort and resources.
      </Text>
    </div>
    <div style={{backgroundColor:"#effbf3",height:"400px" ,border:"1px solid #a6f0c1"}}>
      <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd20dcf9d62a4f65fea8acd_Frame%2027(1)(1)-p-500.png" alt="" />
      <Text fontSize="3xl" color= "#507791" fontWeight="bold" ml="20px">Timesheet time tracking</Text>
      <Text fontSize="xl" ml="20px">Because you are tired of using unmanageable stacks of paper, excel templates, 
      or complex apps week in week out.
      </Text>
    </div>
  </div>
    </div>
  )
}

export default Usecase