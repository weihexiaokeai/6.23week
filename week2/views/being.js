import React, { Component } from 'react'
import Item from '../commponts/item'
import axios from 'axios'

export default class Being extends Component {
    state={
        list:[]
    }
    render() {
        let {list}=this.state
        return (
            <div>
                   {
                        list.map((item,index)=> <Item key={index} item={item} />)
                    }
            </div>
        )
    }
    componentDidMount()
    {
       axios.get('/api/list').then(({data:{list}})=>{
          this.setState({list})
       })
    }
}
