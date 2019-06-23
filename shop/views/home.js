import React, { Component } from 'react'
import Header from '../commponets/header'
import Foot from '../commponets/foot'
import '../mock/index'
import axios from 'axios'
import Item from '../commponets/item'
export default class Home extends Component {
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
            <div>
                <Header back={false} title={"首页"}/>
                <section>
                    {
                        list && list.map((item,index)=><Item key={index} item={item} />)
                    }
                </section>
                <Foot/>
            </div>
        )
    }
    componentDidMount()
    {
        axios.get('/api/list').then(({data:{list}})=>{
             console.log(list)
             this.setState({list})
        })
    }
}
