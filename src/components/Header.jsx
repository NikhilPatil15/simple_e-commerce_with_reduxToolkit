import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { useSelector } from 'react-redux';
const Header = () => {
    const [anchorE1,setAnchorE1] = useState(null)
    const open = Boolean(anchorE1)

    const handleClick = (event) =>{
        setAnchorE1(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorE1(null)
    }
    
    const {carts} = useSelector((state)=>state.allCart)
   
  return (
  
    <>
      <Navbar bg="light" data-bs-theme="light" style={{padding:"0",margin:"0",fontSize:"25px",height:"60px"}}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-black"style={{fontSize:"25px", margin:"0"}}>E-commerce</NavLink>
        
          <NavLink to="/cart">
          <Badge badgeContent={carts.length} color="primary"
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}>
          <i className="fa-solid fa-cart-shopping" style={{fontSize:"25px",color:"black"}}></i>
         </Badge>
         </NavLink>
         
        </Container>
      </Navbar>
    </>
  );
}


export default Header