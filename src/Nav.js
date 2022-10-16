import React, { useEffect, useState } from 'react';
import nav from "./nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {

  const [show,hanldeShow]=useState(false);

  const transitionNavbar=()=>{
    if(window.scrollY>100)
    {
      hanldeShow(true);
    }
    else
    {
      hanldeShow(false);
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll",transitionNavbar);
    return ()=> window.removeEventListener("scroll",transitionNavbar);
  },[]);

  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className={`nav ${show && "nav_black"}`}>
    <img className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
        alt="netflix_logo"
    />
    <img onClick={handleClick} className="nav_avatar"
        src="https://library.kissclipart.com/20180918/ivw/kissclipart-person-red-icon-clipart-computer-icons-avatar-user-7aacb63fbfa8a683.png"
        alt="signed_logo"
    />
    </div>
  )
}

export default Nav;