'use client';

import React from 'react'

const TabContent = (props) => {
    return (
        <>
          <div className="tab-content-wrapper">
             {props.children}
          </div>  
        </>
    )
}

export default TabContent
