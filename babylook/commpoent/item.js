import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class Item extends Component {
    render() {
        let {item}=this.props
        
        return (
            <dl onClick={this.hanleChangle.bind(this,item)}>
                <dt>
                    <img src={item.pic}/>
                </dt>
                <dd>
                    <h3>{item.name}</h3>
                   <div>
                     <p>播放:{item.artist}</p>
                    <p>{item.filesize}</p>
                   </div>
                </dd>
            </dl>
        )
    }
    hanleChangle(item)
    {
            let {history}=this.props
            history.push(`/detail/${item.id}`)
            console.log(item)
         
      
    }
}

export default withRouter(Item)