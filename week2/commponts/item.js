import React, { Component } from 'react'
import  {withRouter} from 'react-router-dom'
 class Item extends Component {
    render() {
        let {item}=this.props
        return (
            <dl onClick={this.handlechange.bind(this,item)}>
                  <dl>
                      <img src={item.img} />
                  </dl>
                  <dd>
                      <p>{item.title}</p>
                      <p>{item.price}</p>
                  </dd>
            </dl>
        )
    }
    handlechange(item)
    {
            let {history}=this.props
            console.log(item,this.props)
            history.push(`/detail/${item.id}`)
    }
}

export default withRouter(Item)