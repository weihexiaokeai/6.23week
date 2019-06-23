import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

function RouterView(props)
{
        let {routers}=props;
        let routerArr= routers && routers.filter(item=>!item.redirect)
        let redirectArr=routers && routers.filter(item=>item.redirect).map((item,index)=><Redirect key={index} form={item.path} to={item.redirect}/>)

        return <Switch>
              {
                  routerArr.map((item,index)=><Route key={index} path={item.path} render={(props)=>{
                      return <item.component {...props} Child={item.children}/>
                  }}/>).concat(redirectArr)
              }
        </Switch>
       
}

export default RouterView