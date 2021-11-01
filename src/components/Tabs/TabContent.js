import React from 'react'
import { Tab} from 'react-bootstrap';



const TabContent = (props) => {
    return (
        <>
          <Tab.Content>
             {props.children}
          </Tab.Content>  
        </>
    )
}

export default TabContent
