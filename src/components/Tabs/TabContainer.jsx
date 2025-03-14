import React from 'react'
import { Tab} from 'react-bootstrap';


const TabContainer = (props) => {
    return (
        <>
           <Tab.Container id="left-tabs-example" defaultActiveKey={props.activeTab}>
              {props.children}
           </Tab.Container> 
        </>
    )
}

export default TabContainer
