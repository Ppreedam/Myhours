import React from 'react'
import { Text } from '@chakra-ui/react'
import style from "./Works.module.css"
import { Button } from '@chakra-ui/react'
import { CheckIcon} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
const Works = () => {
 const navigate=useNavigate()
  return (
    <div>
       <div className={style.part1}>
      <Text fontSize="6xl" fontWeight="lighter" >How it works</Text>
      <Text fontSize="4xl" fontWeight="bold" color= "#507791" mt="30px">& why you should switch to My Hours</Text>
      <Text fontSize="3xl" fontWeight="lighter" pl="30px" mt="30px" mb="50px">Time tracking was a pain. We fixed it 
      and made time tracking worth the effort. My Hours is easy to use and gets 
      the most out of your data with powerful reporting. Teams that use My Hours 
      are more productive, efficient and organized.
        </Text>
        <Button colorScheme='blue' size='lg' mb="50px" >Get Started - It's Free</Button>
     </div>
     <div className={style.part2}>
     <video  width="100%" controls>
        <source
          src="https://www.youtube.com/watch?v=VpMysclixyQ"
           type="video/mp4"
        />
      </video>
     </div>
     <div className={style.part3}>
      <Text fontSize="3xl" fontWeight="bold" pl="30px" mb="20px">Organize your work with projects and tasks</Text>
      <Text fontSize="xl" pl="30px" pr="30px" mb="50px" >Breaking down your work into projects and tasks is done with a few keystrokes. Prioritize tasks, add details and assign them to your team to complete. Set up an estimated budget on a project or task level.</Text>
      <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd7198fa6df4249877e6d5b_HIW-1(1).png" alt="" />
     </div>
     <div className={style.part4}>
     <Text fontSize="3xl" fontWeight="bold" pl="30px" mb="20px">Set flexible billable rates and manage rate changes</Text>
      <Text fontSize="xl" pl="30px" pr="30px" mb="50px" >Every client, project, task and team member can be billed with a custom rate, but with smart defaults. And, when rates change, you decide how it applies to your past work.</Text>
      <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/60c3106b6d15b4476d545c47_Project%20billing.png" alt="" />
     </div>
     <div className={style.part4}>
     <Text fontSize="3xl" fontWeight="bold" pl="30px" mb="20px">Track your time working with all the details</Text>
      <Text fontSize="xl" pl="30px" pr="30px" mb="50px" >Tracking work time is more than a few fields. Add styled notes to your logs, tag with custom keywords, attach files and enter expenses. With keyboard shortcuts, you can do it in no-time.</Text>
      <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61693180d0c70441fdcc29cd_Timesheet%20with%20timer-p-1080.png" alt="" />
     </div>
     <div className={style.part4}>
     <Text fontSize="3xl" fontWeight="bold" pl="30px" mb="20px">Dazzle your clients with custom reports</Text>
      <Text fontSize="xl" pl="30px" pr="30px" mb="50px" >No more one-style-fits-all reports. Go beyond filters and set up reports the way you or your clients want them, without having to retreat back to Excel.</Text>
      <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71990c1a06b2e03f1be70_HIW-4(1).png" alt="" />
     </div>
     <div className={style.part4}>
     <Text fontSize="3xl" fontWeight="bold" pl="30px" mb="20px">Look at the time spent from every angle</Text>
      <Text fontSize="xl" pl="30px" pr="30px" mb="50px" >Fancy dashboards are not enough and with My Hours you can calculate your profit, generate real-time pivot tables or download a simple weekly timesheet.</Text>
      <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61692c9dbe4680c6916e960b_time-analytics.png" alt="" />
     </div>
     <div className={style.part4}>
     <Text fontSize="3xl" fontWeight="bold" pl="30px" mb="20px">Approve or comment on your team’s time logs  </Text>
      <Text fontSize="xl" pl="30px" pr="30px" mb="50px" >Going through every timesheet is a hassle. Select a few projects or team members that might need a careful inspection, while other time logs do not need explicit approval.</Text>
      <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61692ce83988430ca662abb6_Approve%20timesheets-p-1080.png" alt="" />
     </div>
     <div className={style.part5}>
       <div >
    <img width="900px" src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6bd377fbe34a0cc7a0f_HIW-7-p-500.png" alt="" />
       </div>
        <div>
        <Text fontSize="3xl" fontWeight="bold" pl="60px" mb="20px" mt="80px" >Keep clients in the loop with scheduled email reports </Text>
      <Text fontSize="xl" pl="60px" pr="30px" mb="50px" >Setting and downloading reports each month takes precious time. Save your report settings and have My Hours send it to you or your clients directly every period.</Text>
        </div>
     </div>
     <div className={style.part5}>
       <div >
    <img width="900px" src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6d0c755c679d71eda9f_HIW-8-p-500.png" alt="" />
       </div>
        <div>
        <Text fontSize="3xl" fontWeight="bold" pl="60px" mb="20px" mt="80px" >Create invoices straight from your tracked hours </Text>
      <Text fontSize="xl" pl="60px" pr="30px" mb="50px" >No need for an additional tool that handles the invoicing. Calculate the billable amount for each client and generate a numbered invoice that can be sent via email straight away.</Text>
        </div>
     </div>
     <div className={style.part5}>
       <div >
    <img width="900px" src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc913df96a46f4b42ee4264_Roles-p-800.png" alt="" />
       </div>
        <div>
        <Text fontSize="3xl" fontWeight="bold" pl="60px" mb="20px" mt="80px" >Flexible, but simple access roles</Text>
      <Text fontSize="xl" pl="60px" pr="30px" mb="50px" >With a simple 3-role system, you’ll always know who sees what. You can hide costs and billable amounts from anyone, except account administrators.</Text>
        </div>
     </div>
     <div className={style.part5}>
       <div >
    <img width="900px" src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png" alt="" />
       </div>
        <div>
        <Text fontSize="3xl" fontWeight="bold" pl="60px" mb="20px" mt="80px" >Count your chickens and calculate your costs</Text>
      <Text fontSize="xl" pl="60px" pr="30px" mb="50px" >On top of billable rates, teams can add labor costs and expenses. Monitor your project costs with a (monthly) budget and calculate your profits or losses.</Text>
        </div>
     </div>
      <div className={style.part6}>
       <div>
       <Text fontSize="3xl" fontWeight="bold"  mb="20px" mt="80px" pl="20px">Sync your data with more than a 1000 tools</Text>
      <Text fontSize="xl"  pr="30px" mb="50px" pl="20px" >Transfer clients, projects and tasks from Quickbooks and other solutions via Zapier. Documented API enables tech-savvy folks to build their own integrations.</Text>
       <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9145d6e47e935f0570ff3_Integrations-p-800.png" alt="" />
       </div>
       <div>
       <Text fontSize="3xl" fontWeight="bold"  mb="20px" mt="80px" pl="20px" >Track time on the go with a mobile app</Text>
      <Text fontSize="xl"  pr="30px" mb="50px" pl="20px" >Besides tracking time, add new projects, manage tasks and view reports - all through our mobile apps. Both iOS and Android are supported.</Text>
       <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd73713f912e4498947d1a3_HIW-mobile%20(1)(1)-p-800.png" alt="" />
       </div>
      </div>
      <div className={style.part7}>
        <div>
        <img width="100%"src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4fa86e0322e7deff06f6e_Group%203.png" alt="" />
        </div>
            
            <Text as="u" fontSize="3xl" fontWeight="bold"  mb="20px" mt="80px" pl="20px" >No, you cannot spy on your employees with My Hours</Text>
      <Text fontSize="xl"  pr="30px" mb="50px" pl="20px" >My Hours does not record your or your employees’ screens. No screenshots, no apps tracked, no employee monitoring. Of course, you are free to view work logs that your team members have entered.</Text>
      </div>
      <div className={style.part8}>
      <Text fontSize='4xl'  color= "#507791" as="u" fontWeight="bolder" mb="40px">
      Take a look at the complete list of features in My Hours.
                </Text>
                <Text fontSize="3xl" fontWeight="light" color= "#507791" mb="40px">Or simply try it out: </Text>
                <Button colorScheme='blue' size='lg' mb="50px" >Get Started - It's Free</Button>
      </div>
      <div className={style.part9}>
        <Text  fontSize="3xl" color= "#507791" mt="10px">Have questions? We're here</Text>
         <p style={{fontSize:"20px",marginTop:"10px"}}>It's always nice to have someone to talk to when facing new software. Get in touch and  we'll try our best to help you out.</p>
        <div className={style.part9_box1}>
         <Text as="u" color="blue" pr="20px" cursor="pointer" onClick={()=>navigate("/support")}> <span><CheckIcon/></span> EMAIL & LIVE CHAT</Text>
       
         <Text as="u" color="blue"  pr="20px" cursor="pointer" onClick={()=>navigate("/support")}> <span><CheckIcon/></span> TRAINING FOR TEAMS</Text>
         <Text as="u" color="blue" cursor="pointer" onClick={()=>navigate("/support")}> <span><CheckIcon/></span> KNOWLEDGE BASE</Text>
        </div>
        </div>
    </div>
  )
}

export default Works