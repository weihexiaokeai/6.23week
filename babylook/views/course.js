import React, { Component } from 'react'
import axios from 'axios'
import Listen from '../commpoent//listen'
export default class Course extends Component {
    constructor()
    {
        super()
        this.state={
            list:[]
        }
    }
    render() {
        let {list}=this.state
        return (
            <div className="mideles">
            {
                list && list.map((item,index)=><Listen key={index} item={item} index={index}/>) 
            }
        </div>
        )
    }
    componentDidMount()
    {
        axios.get("http://bb.shoujiduoduo.com/baby/bb.php?type=getlist&pagesize=30&listid=6").then(({data:{list}})=>{
                    console.log(list)
                this.setState({list})
        })
    }
}
