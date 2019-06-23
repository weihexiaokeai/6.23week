import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import routers from './routerConfig'
import RouterView from './routerview'

function RooRouter()
{
    
        return <Router>                                                                                                                                                                                                                                                                                                          
                <RouterView routers={routers}/>
        </Router>
}
export default RooRouter