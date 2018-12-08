
import {SETTOPICLIST,SETFOCUSLIST,SETCATELIST,SETTAGLIST,SETPOLICYDESCLIST,SETCATEGORY,SETCATEGORYLIST,SETSHIWUINIT,SETSHIWULIST,RESETSHIWULIST,SETSHIWUTABS} from './mutations-type';

export default {
    [SETTOPICLIST](state,{topicList}){
        state.topicList=topicList;
    },
    [SETFOCUSLIST](state,{focusList}){
        state.focusList=focusList;
    },
    [SETCATELIST](state,{cateList}){
        state.cateList=cateList;
    },
    [SETTAGLIST](state,{tagList}){
        state.tagList=tagList;
    },
    [SETPOLICYDESCLIST](state,{policyDescList}){
        state.policyDescList=policyDescList;
    },
    [SETPOLICYDESCLIST](state,{policyDescList}){
        state.policyDescList=policyDescList;
    },
    [SETCATEGORY](state,{category}){
        state.category=category;
    },
    [SETCATEGORYLIST](state,{categoryList}){
        state.categoryList=categoryList;
    },

    //将识物的栏目数据放到ShiWuTabs中
    [SETSHIWUTABS](state,{ShiWuTabs}){
        state.ShiWuTabs=ShiWuTabs;
    },

    //将推荐栏目请求到的首屏数据进行处理,并作为ShiWuList
    [SETSHIWUINIT](state,{data}){
        let shiwuArr=[];
        data.forEach(({topics})=>{
            let list=topics.filter((topic)=>topic.type===1||topic.type===2||topic.type===7);
            shiwuArr=shiwuArr.concat(list);
        });
        state.ShiWuList=shiwuArr;
    },
    
    //将请求到的数据(推荐的懒加载数据和其他栏目的首屏及懒加载数据)进行处理,并插入到ShiWuList中
    [SETSHIWULIST](state,{data}){
        let shiwuArr=[];
        //处理推荐栏目的数据
        if(data.length>0&&data[0].look){
             data.forEach((item)=>{
                 if(item.topics.length>0) {
                     let topics=item.topics.filter((topic)=>{
                         return topic!==null;
                        });
                    shiwuArr=shiwuArr.concat(...topics);
                 }
            })
            state.ShiWuList=state.ShiWuList.concat(shiwuArr)
        }else{
            //处理除推荐以外的数据
            data.forEach((topic)=>{
                if(topic.itemList){
                    topic.itemList=topic.itemList.filter((item)=>item);
                }
           })
            state.ShiWuList=state.ShiWuList.concat(data);
        }
    },
    [RESETSHIWULIST](state){
        state.ShiWuList=[];
    },
}