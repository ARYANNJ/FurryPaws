import React from 'react'

const Dropdown = () => {
  return (
    <div class="dropdown">
 
    <button class="dropbtn" >Categories</button>
    <div class="dropdown-content">
      <a href="/cats">Cats</a>
      <a href="/dogs">Dogs</a>
      <a href="/others">Others</a>
    </div>
    </div>
    
  )
}

export default Dropdown;