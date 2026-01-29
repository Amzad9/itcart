'use client';

import React from 'react'

const Tabs = (props) => {
    return (
        <>
            <div className={`tabs tabs-boxed ${props.ClassName || ''}`}>
                {props.children}
            </div> 
        </>
    )
}

export default Tabs
