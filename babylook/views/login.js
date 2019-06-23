import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <input placeholder="请输入用户名"/>
                <input placeholder="请输入密码"/>
                <button>登录</button>
            </div>
        )
    }
}
