import React from 'react'

import Loadable from 'react-loadable'
 
const Loading=()=>{
      return <div>loading...</div>
}
const Home=Loadable({
    loader:()=>import('../views/home'),
    loading:Loading
})
const Classif=Loadable({
    loader:()=>import('../views/classif'),
    loading:Loading
})
const Release=Loadable({
    loader:()=>import('../views/release'),
    loading:Loading
})
const Shop=Loadable({
    loader:()=>import('../views/shop'),
    loading:Loading
})
const My=Loadable({
    loader:()=>import('../views/my'),
    loading:Loading
})
const Login=Loadable({
    loader:()=>import('../views/login'),
    loading:Loading
})
const Being=Loadable({
    loader:()=>import('../views/being'),
    loading:Loading
})
const Start=Loadable({
    loader:()=>import('../views/start'),
    loading:Loading
})
const Detail=Loadable({
    loader:()=>import('../views/detail'),
    loading:Loading
})
const routers =[
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/being',
                component:Being,
            },
            {
                path:'/home/start',
                component:Start,
            },{
                path:'/home',
                redirect:'/home/being'
            }
        ]
    },
    {
        path:'/classif',
        component:Classif
    },
    {
        path:'/release',
        component:Release
    },
    {
        path:'/shop',
        component:Shop
    },
    {
        path:'/my',
        component:My
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/detail/:id',
        component:Detail
    },
    {
        path:'/',
        redirect:'/home'
    }

]

export default routers