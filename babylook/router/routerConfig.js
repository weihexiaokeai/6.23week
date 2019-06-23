import React from 'react'
import Loadable from 'react-loadable'

const Loading =()=>{
    return <div>loading...</div>
}
const Write=Loadable({
    loader:()=>import("../views/write"),
    loading:Loading
})
const Hear=Loadable({
    loader:()=>import("../views/hear"),
    loading:Loading
})
const My=Loadable({
    loader:()=>import("../views/my"),
    loading:Loading
})
const Nursery=Loadable({
    loader:()=>import("../views/nursery"),
    loading:Loading
})
const Story=Loadable({
    loader:()=>import("../views/story"),
    loading:Loading
})
const Cartoon=Loadable({
    loader:()=>import("../views/cartoon"),
    loading:Loading
})
const Childhood=Loadable({
    loader:()=>import("../views/childhood"),
    loading:Loading
})
const Course=Loadable({
    loader:()=>import("../views/course"),
    loading:Loading
})
const Detail=Loadable({
    loader:()=>import("../views/detail"),
    loading:Loading
})
const Login=Loadable({
    loader:()=>import("../views/login"),
    loading:Loading
})
const routers=[
            {
                path:'/write',
                component:Write,
                children:[
                    {
                        path:'/write/nursery',
                        component:Nursery
                    },
                    {
                        path:'/write/story',
                        component:Story
                    },
                    {
                        path:'/write/cartoon',
                        component:Cartoon
                    },
                    {
                        path:'/write',
                        redirect:'/write/nursery'
                    }
                ]
            },
            {
                path:'/hear',
                component:Hear,
                children:[
                     {
                         path:"/hear/childhood",
                         component:Childhood
                     },
                     {
                        path:"/hear/course",
                        component:Course
                    },
                    {
                        path:'/hear',
                        redirect:'/hear/childhood'
                    }
                ]
            },
            {
                path:'/my',
                component:My
            },
            {
                path:'/detail/:id',
                component:Detail
            },
            {
                path:'/login',
                component:Login
            },
            {
                path:'/',
                redirect:'/write'
            }
]

export default routers