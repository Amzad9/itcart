'use client';

import React from 'react'

function TabPane(props) {
    return (
        <>
            <div className={`tab-content ${props.activeTab === props.eventKey ? '' : 'hidden'}`}>
               {props.children}
            </div> 
        </>
    )
}

export default TabPane;
