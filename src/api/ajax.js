import axios from "axios";
let _url;

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export default function ajax(url,data={},method="GET"){
    const {onlyOne}=data;
    return new Promise((resolve,reject)=>{
        let promise;
        if(onlyOne){
            delete data.onlyOne;
            // _url=url;
        }
        if(onlyOne&&source.token){
            console.log(source);
            source.cancel('取消一个');
            console.log(source);
        }
        if(method=="GET"){
            if(JSON.stringify(data) != "{}"){
                let str="";
                Object.keys(data).forEach((key)=>{
                    str+=`${key}=${data[key]}&`
                })
                url+="?"+str.substring(0,str.length-1);
            }
            if(onlyOne){
                promise = axios.get(url,{
                    cancelToken: source.token
              });
            }else{
                promise = axios.get(url);
            }
        }else{
            promise=axios.post(url,data)
        }
        promise.then((response)=>{
            // if(!onlyOne||_url===url){
                resolve(response.data)
            // }else{
            //     console.log('取消的请求:',response.data);
            // }
        })
    })
}