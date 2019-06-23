import React, { Component } from 'react'
import axios from 'axios'
import Item from '../commpoent/item'
export default class Cartoon extends Component {
    constructor()
    {
        super()
        this.state={
            lsit:[]
        }
    }
    render() {
        let {list}=this.state
        return (
            <div className='center'>
                {
                    list && list.map((item,index)=><Item key={index} item={item}/>)
                }
            </div>
        )
    }
    componentDidMount()
    {
        axios.get("http://bb.shoujiduoduo.com/baby/bb.php?type=getlistv2&act=home&pagesize=30&pid=26").then(({data:{list}})=>{
            this.setState({list})
        })
    }
}
