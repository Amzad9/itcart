import React from 'react'
import {Nav} from 'react-bootstrap';
import TabContainer from '../Tabs/TabContainer'
import Tabs from '../Tabs/Tabs';
import NavLink from '../Tabs/NavLink';
import './CommonTab.scss';

function CommonTab(props) {
    return (
        <>
           <TabContainer className="common-tabs" activeTab={props.activeTab}>
                <Tabs ClassName="justify-content-start justify-content-md-center">
                    {props.careerData.map( (item , index)=> (
                    <Nav.Item>
                        <NavLink onClick={ () => props.onClick(index)} eventKey={item.key} title={item.title} />
                    </Nav.Item>
                    ))}
                </Tabs>
            </TabContainer> 
        </>
    )
}

export default CommonTab
