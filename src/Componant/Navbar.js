import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Style/navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Navbar() {

    const [expand, setExpand] = useState(false);

    const location = useLocation();

    useEffect(()=>{
        setExpand(false);
    },[location])

  return (
    <div className="navbar" id={expand ? 'open' : 'close'}>
        <div className="toggleButton">
            <button onClick={ ()=> {
              setExpand( (perv) => !perv);   
            }}>
             <ReorderIcon></ReorderIcon>
            </button>
        </div> 
        <div className="links">
            <Link to='/'> Home </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/experience'> Experience </Link>
        </div>

    </div>
  )
}
