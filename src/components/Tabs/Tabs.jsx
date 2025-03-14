import React from 'react'
import { Nav} from 'react-bootstrap';


const Tabs = (props) => {
    return (
        <>
            <Nav variant="pills" className={props.ClassName}>
                {props.children}
            </Nav> 
        </>
    )
}

export default Tabs
