import axios from "axios";

export default function ajax(url,data={},method="GET"){
    return new Promise((resolve,reject)=>{
        let promise;
        if(method=="GET"){
            if(JSON.stringify(data) != "{}"){
                let str="";
                Object.keys(data).forEach((key)=>{
                    str+=`${key}=${data[key]}&`
                })
                url+="?"+str.substring(0,str.length-1);
            }
            promise = axios.get(url);
        }else{
            promise=axios.post(url,data)
        }
        promise.then((response)=>{
            resolve(response.data)
        })
    })
}