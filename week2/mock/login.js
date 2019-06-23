import Mock from 'mockjs'

Mock.mock('/api/login',({body})=>{
    let {name,pwd}=JSON.parse(body);
     
     if(name==name && pwd==pwd)
     {
         return {
              code:1,
              msg:"成功"
         }

     }
     else{
        return {
            code:0,
            msg:"失败"
       }
     }
    
})