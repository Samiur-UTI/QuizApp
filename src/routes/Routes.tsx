import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Freequiz from '../pages/quiz/freequiz/freequiz'
import Register from '../pages/register/register'
const Routes : React.FC = () =>  {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/freequiz' component={Freequiz} />    
            </Switch>   
        </>
    )
}
export default Routes
