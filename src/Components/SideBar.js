import React from 'react'
import "./SideBarstyle.css"
import { FaUserAlt } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiFillMessage } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';



function SideBar() {
  return (
    <div className="side">

        <h1 className="title"><FaUserAlt/> User</h1>
        <h1 className="title"> <BsFillBriefcaseFill/> Cases</h1>
        <h1 className="title"> <AiOutlineUserAdd/> Add User</h1>
        <h1 className="title"> <AiOutlineUserAdd/> Add User</h1>
        <h1 className="title"> <AiFillMessage/> Messages</h1>
        <h1 className="title"> <BiUserCircle/> Profile</h1>
    </div>
  )
}

export default SideBar