import React from 'react'
import { Button} from 'react-bootstrap';
import './Button.scss'

const button = (props) =>{
    return (
        <>
          <Button variant={props.variant} className={props.className}>{props.children}</Button>  
        </>
    )
}

export default button
