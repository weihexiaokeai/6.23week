import React, { Component } from 'react'

export default class Listen extends Component {
    render() {
        
        let {item,index}=this.props
        console.log(item)
        return (
             <div>
                  <p>{index}</p>
                  <dl>
              
                    <dt>
                        <h3>{item.name}</h3>    
                    </dt> 
                    <dd>
                        <span>{item.artist}</span>
                        <span>播放：{item.filesize}</span>
                    </dd>
              </dl>
             </div>
        )
    }
}
