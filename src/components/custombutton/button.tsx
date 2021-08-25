import { Button } from '@material-ui/core'
import React from 'react'
import './button.scss'
interface buttonProps {
    color:'primary'|'secondary'|'default'|'inherit';
    className: string;
    text: string;
    variant: 'contained'|'outlined'|'text' ;
    type?:'string'
}

const CustomButton: React.FC<buttonProps> =({color,className,text,variant}) => {
    return (
        <div className="custom-button">
            <Button variant={variant} color={color} className={className} type='submit'>
                <span className={className === 'btn-jumbotron' ? 'jumbo-btn-text': '' }>{text}</span>
            </Button>
        </div>
    )
}
export default CustomButton