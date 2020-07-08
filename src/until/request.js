
import axios from "axios";
 let Request = {
   //类似于 axios。get（“路径”）
   getData({url,data={},method="get"} ) {
     return new Promise((resolve,reject)=>{
       this._getReq(url,method,data,resolve,reject)
     })
   },
   _getReq:function(url,method="get",data={},reslove,reject){
     let format = method =="get"?"params":"data"
     axios({
       url:url,
       method:method,
       [format]:data,
     }).then(res=>{
       reslove(res)
     }).catch(()=>{
       reject()
     })
   }


 }

export  {Request }