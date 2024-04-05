import React from 'react'
import {Box,Button} from "@mui/material"
import Dropdown from './Dropdown'
export const Navbar = () => {
  return (
    <div className="navbar">
    <Box>
<p className='logo'> Furry Paws</p>
    </Box>
    <Box className="side" sx={{display:"flex",gap:"20px",alignItems:"center"}}>
    <Button variant='outline'href='/home' >Home</Button>
<Dropdown/>
<Button variant='outline' sx={{border:"2px solid black" ,marginRight:"60px"}} href='/login'>login</Button>
    </Box>

     </div>
  )
}
