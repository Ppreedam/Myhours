import { Box, Button, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
 const navigate=useNavigate()
    return (
    <div 
    style={{display:"flex",
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    padding:"20px", 
    }}>
        <Spacer/>
        <Box style={{width:"200px"}} cursor= "pointer">
    <Image src='https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd37c83dfa3ccb0d2d9836f_myhours-logo.svg' alt='Dan Abramov' />
</Box>
<Spacer/>
<Spacer/>
{/* ..................................................... */}
<Flex minWidth='max-content' alignItems='center' gap='9'>

 <Box >

 <Text   fontSize='20px' cursor= "pointer" color="#3B8FC2" onClick={()=>navigate("/works")}>
 How to works
</Text>
 </Box>
 
 <Box>
 <Text fontSize='18px' color='#3B8FC2' cursor= "pointer"  onClick={()=>navigate("/usecase")}>
 Use cases
</Text>
 </Box>

 <Box>
 <Text fontSize='18px' color='#3B8FC2 ' cursor= "pointer">
  Pricing
</Text>
 </Box>

 <Box>
 <Text fontSize='18px' color='#3B8FC2' cursor= "pointer" onClick={()=>navigate("/support")}>
 Suport
</Text>
 </Box>

 <Box>
 <Text fontSize='18px' color='#3B8FC2' cursor= "pointer"  onClick={()=>navigate("/sign")}>
 Sign in
</Text>

 </Box>

 <Box>
 <Button colorScheme='blue' size='lg'>Get My Hours Free</Button>
 </Box>
 </Flex>
 <Spacer/>
    </div>
  )
}

export default Navbar