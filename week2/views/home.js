import React, { Component } from 'react'
import Foot from '../commponts/foot'
import Header from '../commponts/header'
import {NavLink} from 'react-router-dom'
import RouterView from '../routers/routerview'

import  '../mock//list'

export default class Home extends Component {
    
    render() {
        let {child}=this.props
        
        return (
            <div>
                <Header back={true} show={true}/>
                  <section>
                    <div className="top">
                    <NavLink to="/home/being">正在抢购</NavLink>
                     <NavLink to="/home/start">开始</NavLink>
                    </div>
                  <RouterView routers={child}/>
                  </section>
                <Foot/>
            </div>
        )
    }
  
}
