import React from 'react'
import style from "./Home.module.css"
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { ArrowForwardIcon ,CheckIcon} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'


const Home = () => {
const navigate =useNavigate()
  return (
    <div>
  
    {/* ................................. */}
    <div className={style.main} >
     <div className={style.part1}>
       <p><span style={{fontWeight:"bolder"}}>Organize</span> projects, <span  style={{fontWeight:"bolder"}}>Track</span> time and <span style={{fontWeight:"bolder"}}>Report</span>  your work</p>
       
       <div>
        <h3>Coordinate projects and tasks. Track your work hours and 
          create awesome-looking reports for clients. <span style={{fontWeight:"bolder"}}>All-in-one free time tracking software.</span></h3>
       </div>
       <div style={{textAlign:"center",marginTop:"40px",marginBottom:"40px"}}>

       <Button colorScheme='blue' size='lg' >Get Started - It's Free</Button>
       </div>
        </div>
      <div className={style.part2}>
        <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd337b26121202b5bfb96d7_OriginalSize(1)-p-1080.png" alt="Website" />
      </div>
       <div className={style.part3}>
        <p>Trusted by more than <span style={{fontWeight:"bold"}}>100.000 businesses</span> worldwode</p>
        <div>
          <img style={{width:"150px"}} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9399ba39d2583a755_Capterra-4-7.png" alt="Capterra" />
          <img style={{width:"150px"}} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9b4eb5ca178cc55df_g2-4-7.png" alt="leader" />
          <img style={{width:"150px"}}src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9487a040f81a5d142_MS-Gold.png" alt="Microsoft partner" />
        </div>
        <div style={{marginTop:"40px"}} >
          <img style={{width:"120px"}} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079c0b6e21682628f281_typefox%201.png" alt="" />
       <img style={{width:"120px"}}  src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079cd7ceecebfc3f5519_kpmg_logo%201.png" alt="" />
       <img style={{width:"120px"}}  src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079dfd768757fcf2ea64_logo-Impartner-1.png" alt="" />
       <img style={{width:"120px"}}  src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d3f7265588b6d1dbe_semaphore-logo.png" alt="" />
       <img style={{width:"120px"}}  src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d09b818dd84138753_aurora-logo-horiz-white%201.png" alt="" />
       <img style={{width:"120px"}}  src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d14844ef7226bb10a_logo_heading.png" alt="" />
        </div>
       </div>
       <div className={style.part4}>
           <div className={style.box1}>
            <h2>Coordinate your team, projects and tasks</h2>
            <Text fontSize='lg'mt="10px" mb="20px">Get out of your inbox mess: create projects, 
              assign tasks and write-down or attach details. Track project 
              profitability with hourly rates.
               Set up budgets and get reminded when youre close.
               </Text>
               <Text fontSize='lg' as='i' color= "#507791">"“Excellent time tracker to manage your 
                tasks! It changed the way I organize myself, 
                I'm more productive since I used it!” - Guadalupe G., 
                Art Director"
                </Text>
           </div>
           <div>
            <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd7199052d14ec5e2a6c813_HP-1.png" alt="" />
           </div>
       </div>
   <div className={style.part5}>
<div>
  <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991bd83c222217cac17_HP-2.png" alt="" />
</div>
<div className={style.part5_box1}>
            <h2>Track your work hours, expenses and more</h2>
            <Text fontSize='lg'mt="10px" mb="20px">With My Hours you can track all your work. 
            Add a detailed description to your time logs and expenses. We know time tracking is a hassle,
             so we’ve designed it to be super fast.
               </Text>
               <Text fontSize='lg' as='i' color= "#507791" >“A wonderful product.
                We no longer have to use multiple programs to track time, 
                projects, PTO, etc.” - Katie L., 
               Office Coordinator"
                </Text>
           </div>
   </div>
   <div className={style.part6}>
   <div className={style.part6_box1}>
            <h2>Create great-looking reports</h2>
            <Text fontSize='lg'mt="10px" mb="20px">Turn your work into dazzling reports 
            with confidence. From Dashboard to more advanced time analytics.
             No need for extra spreadsheet work, 
            even though you can export your data.
               </Text>
               <Text fontSize='lg' as='i' color= "#507791" >““My Hours is a super easy to use time tracker and 
               great for sending hourly reports to clients for billable work” -
                Erin A. Business owner"
                </Text>
           </div>
           <div>
            <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991a6df42a49f7e6d5c_HP-3.png" alt="" />
           </div>
   </div>
        <div style={{textAlign:"center",marginTop:"40px",marginBottom:"30px",cursor:"pointer"}}>
        <Text as='u' fontSize="2xl" color= "#507791" onClick={()=>navigate("/works")}>See how My Hours Works in detail  <span><ArrowForwardIcon/></span> </Text>
        </div>
        <div className={style.part7}>
          <Text  fontSize="4xl" color="#375d75">A flexible tool for all types of organizations</Text>
          <div className={style.part7_box1}>
            <div>
           <Text  fontSize="2xl" color="#375d75">Billing</Text>
           <Text  fontSize="lg" color="#375d75">We need to bill our clients with flexible hourly rates.</Text>
           <Text as="u" fontSize="lg" color="#375d75">Here's how...</Text>
            </div>
            <div>
           <Text  fontSize="2xl" color="#375d75">Profitability</Text>
           <Text  fontSize="lg" color="#375d75">We would like to calculate the profitability of our projects.</Text>
           <Text as="u" fontSize="lg" color="#375d75">Here's how...</Text>
            </div>
            <div>
           <Text  fontSize="2xl" color="#375d75">Time tracking</Text>
           <Text  fontSize="lg" color="#375d75">We want to track time on projects and tasks.</Text>
           <Text as="u" fontSize="lg" color="#375d75">Here's how...</Text>
            </div>
            <div>
           <Text  fontSize="2xl" color="#375d75">Attendance</Text>
           <Text  fontSize="lg" color="#375d75">We need to track employee attendance/absence and tasks.</Text>
           <Text as="u" fontSize="lg" color="#375d75">Here's how...</Text>
            </div>
            <div>
           <Text  fontSize="2xl" color="#375d75">Client reporting</Text>
           <Text  fontSize="lg" color="#375d75">I need to report the time spent to clients or invoice them.</Text>
           <Text as="u" fontSize="lg" color="#375d75">Here's how...</Text>
            </div>
            <div>
              <br />
              <br />
              
           <Text as="u" fontSize="2xl" color="#375d75">Find more use cases <span><ArrowForwardIcon/></span></Text>
            </div>
          </div>
        </div>
        <div className={style.part8}>
        <Text  fontSize="3xl" color= "#507791" mt="10px">Have questions? We're here</Text>
         <p style={{fontSize:"20px",marginTop:"10px"}}>It's always nice to have someone to talk to when facing new software. Get in touch and <br /> we'll try our best to help you out.</p>
        <div className={style.part8_box1}>
         <Text as="u" color="blue" pr="20px" cursor="pointer" onClick={()=>navigate("/support")}> <span><CheckIcon/></span> EMAIL & LIVE CHAT</Text>
       
         <Text as="u" color="blue"  pr="20px"  cursor="pointer" onClick={()=>navigate("/support")}> <span><CheckIcon/></span> TRAINING FOR TEAMS</Text>
         <Text as="u" color="blue"  cursor="pointer" onClick={()=>navigate("/support")}> <span><CheckIcon/></span> KNOWLEDGE BASE</Text>
        </div>
        </div>
<div className={style.part9}>
   <div style={{backgroundColor:"#f8fafb"}}>
    <Text fontSize="4xl" color= "#507791" fontWeight="bold" m="30px">Waste no more time,
           jump right in!</Text>
<Button colorScheme='blue' size='lg' >Get Started - It's Free</Button>
<br />
<br />
<p>My Hours is Free to use for teams of any size. Pro paid plan comes with <br/>
  additional features like invoicing, admin controls and priority support.</p>
   </div>
   <div style={{backgroundColor:"#faf9f7"}}>
   <Text fontSize="4xl" color= "#507791" fontWeight="lighter" m="30px">Need more info? Get a product demo.</Text>
   <Button colorScheme='blue' size='lg' >Talk to our Team</Button>

   <br />
   <br />
   <p>Teams of 6+ are welcome to book a personalized demo to see how
     My Hours works in detail.</p>
   </div>
</div>


        </div>

    </div>
  )
}

export default Home