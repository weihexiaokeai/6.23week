import React, { Component } from 'react'
import axios from 'axios'
export default class Login extends Component {
    state={
        name:"",
        pwd:''
    }
    render() {
        let {name,pwd}=this.state
        return (
            <div>
                <input value={name} onChange={this.handlenameChange.bind(this)} placeholder="请输入用户"/>
                <input value={pwd} onChange={this.handlenpwdChange.bind(this)} placeholder="请输入密码"/>
                <button onClick={this.onclickChange.bind(this)}>登录</button>
            </div>
        )
    }
    handlenameChange(e)
    {
        this.setState({name:e.target.value})
    }
    handlenpwdChange(e)
    {
        this.setState({pwd:e.target.value})
     
    }
    onclickChange()
    {
        let {name,pwd} =this.state
      
      
     
    }
}
