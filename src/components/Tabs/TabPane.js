import React from 'react'
import { Tab} from 'react-bootstrap';

function TabPane(props) {
    return (
        <>
            <Tab.Pane eventKey={props.eventKey}>
               {props.children}
            </Tab.Pane> 
        </>
    )
}

export default TabPane;
