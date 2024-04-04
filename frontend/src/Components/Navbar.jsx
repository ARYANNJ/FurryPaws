import React from 'react'
import {Box,Button} from "@mui/material"
export const Navbar = () => {
  return (
    <div>
        <Box className="navbar">
  <h2 className='logo'>Furry Paws</h2>
  <div>
<Box display={"flex"} sx={{textAlign:"center"}} >
<p >Home</p>
  <div class="dropdown">
 
  <button class="dropbtn" >Categories</button>
  <div class="dropdown-content">
    <a href="/cats">Cats</a>
    <a href="/dogs">Dogs</a>
    <a href="/others">Others</a>
  </div>
  </div>
  <Button variant="outlined" className='loginButton' sx={{border:"2px solid black" , color:"black",padding:"2px"}}>Login</Button>

</Box>
  </div>
        </Box>
    </div>
  )
}
