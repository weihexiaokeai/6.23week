import React, { Component } from 'react'
const islogin=(Com)=>{
  return  class  extends Component{
        state={
            islogin:false
        }
     
    render()
       
    {

              
            return this.state.islogin ? <Com {...this.props}/>:null;
    }
    componentDidMount()
    {
            let user=window.localStorage.user;
            let {history}=this.props
            if(user)
            {
                    this.setState({islogin:true})
            }
            else{
                history.push('/login')
            }
    }
    }
}


export default islogin