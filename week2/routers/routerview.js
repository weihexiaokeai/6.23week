import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

function RouterView(props)
{
        let {routers}=props
        let redirectArr=routers.filter(item=>item.redirect).map((item,index)=><Redirect key={index} from={item.path} to={item.redirect}/>)
        let routerArr=routers.filter(item=>!item.redirect)
        return <Switch>
                    {
                        routerArr.map((item,index)=><Route key={index} path={item.path} render={(props)=>{
                                return <item.component {...props} child={item.children}/>
                        }}/>).concat(redirectArr)   
                    }
        </Switch>
}

export default RouterView