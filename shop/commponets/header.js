import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class Header extends Component {
    static  defaultStatus={
        back:false,
        title:"首页"
   }
    render() {
      
         let {back,title}=this.props
        return (
            <header>
                    {
                        back ? <p onClick={()=>{
                             let {histroy}=this.props
                                  histroy.go(-1)
                        }}>&lt;</p> :null
                    }
                    <span>{title}</span>
            </header>
        )
    }
}
export default withRouter(Header)
