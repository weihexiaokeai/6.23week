import React, { Component } from 'react'
import axios from 'axios'
import Item from '../commpoent/item'
export default class Story extends Component {
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
           < div className='center'>
            {
                list && list.map((item,index)=><Item key={index} item={item}/>)
            }
        </div>
        )
    }
    componentDidMount()
    {
        axios.get("http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=27").then(({data:{list}})=>{
            this.setState({list})
        })
    }
}
