import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import CustomButton from '../custombutton/button'
import './navbar.scss'
const Navbar : React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <div className="navbar-toolbar">
                    <Typography variant="h6">
                        Welcome !
                    </Typography>
                    <div className='login-register'>
                        <NavLink className='link' to='/login'>
                            <CustomButton variant='outlined' className='login-btn' color='inherit' text='login'/>
                        </NavLink>
                        <NavLink className='link' to='/register'>
                            <CustomButton variant='outlined' className='register-btn' color='inherit' text='register'/>
                        </NavLink>
                    </div>
                </div>
            </Toolbar>
      </AppBar>
    )
}
export default Navbar
