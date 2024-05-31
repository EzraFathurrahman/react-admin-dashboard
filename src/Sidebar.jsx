import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsBox2}
 from 'react-icons/bs'
 import { VscServerProcess } from "react-icons/vsc";
 import { IoFootstepsOutline } from "react-icons/io5";
 import { GrDocumentConfig } from "react-icons/gr";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsBox2  className='icon_header'/>Order Admin
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <VscServerProcess className='icon'/> Config Step Master
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <GrDocumentConfig className='icon'/> Config Step Detail
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoFootstepsOutline className='icon'/> Order Tracker
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar