import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class Item extends Component {
    render() {
       let {item}=this.props
        return (
            <dl onClick={this.handlechang.bind(this,item)}>
                <dt>
                    < img src={item.img}/>
                </dt>
                <dd>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                </dd>
            </dl>
        )
    }
    handlechang(item)
    {
        console.log(this.props)
        let {history}=this.props
                    history.push(`/detail/${item.id}`)
    }
}
export default withRouter(Item)