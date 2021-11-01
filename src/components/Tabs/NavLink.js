import React from 'react'
import { Nav} from 'react-bootstrap';

const NavLink = (props) => {
    return (
        <>
           <Nav.Link className={props.className} onClick={props.onClick} eventKey={props.eventKey}>{props.title}{props.children}</Nav.Link> 
        </>
    )
}

export default NavLink
