'use client';

import React from 'react'

const NavLink = (props) => {
    return (
        <>
           <a 
             className={`tab ${props.className || ''} ${props.activeTab === props.eventKey ? 'tab-active' : ''}`}
             onClick={props.onClick}
             role="tab"
           >
             {props.title}{props.children}
           </a> 
        </>
    )
}

export default NavLink
