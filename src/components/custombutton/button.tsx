import { Button } from '@material-ui/core'
import React from 'react'
import './button.scss'
interface buttonProps {
    color:'primary'|'secondary'|'default'|'inherit';
    className: string;
    text: string;
}

const CustomButton: React.FC<buttonProps> =({color,className,text}) => {
    return (
        <div className="custom-button">
            <Button variant='outlined' color={color} className={className}>{text}</Button>
        </div>
    )
}
export default CustomButton