'use client';

import React, { useState } from 'react'

const TabContainer = (props) => {
    const [activeTab, setActiveTab] = useState(props.activeTab || props.defaultActiveKey);
    
    return (
        <>
           <div className={props.className || ''}>
              {React.Children.map(props.children, child => 
                React.cloneElement(child, { activeTab, setActiveTab })
              )}
           </div> 
        </>
    )
}

export default TabContainer
