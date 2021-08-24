import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
const Routes : React.FC = () =>  {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />    
            </Switch>   
        </>
    )
}
export default Routes
