'use client';

import React from 'react'
import TabContainer from '../Tabs/TabContainer'
import Tabs from '../Tabs/Tabs';
import NavLink from '../Tabs/NavLink';
import './CommonTab.scss';

function CommonTab(props) {
    return (
        <>
           <TabContainer className="common-tabs" activeTab={props.activeTab}>
                <Tabs ClassName="justify-start md:justify-center">
                    {props.careerData.map( (item , index)=> (
                    <NavLink 
                        key={item.key}
                        onClick={ () => props.onClick(index)} 
                        eventKey={item.key} 
                        title={item.title}
                        activeTab={props.activeTab}
                    />
                    ))}
                </Tabs>
            </TabContainer> 
        </>
    )
}

export default CommonTab
