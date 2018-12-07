
import {SETTOPICLIST,SETFOCUSLIST,SETCATELIST,SETTAGLIST,SETPOLICYDESCLIST,SETCATEGORY,SETCATEGORYLIST,SETSHIWU,SETNEWPRODUCTS,SETTOPICHOMES,SETSHIWUMORE,SETSHIWUINIT,SETSHIWULIST,RESETSHIWULIST} from './mutations-type';

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
    [SETSHIWU](state,{shiwu}){
        state.shiwu=shiwu;
    },
    [SETSHIWUMORE](state,{shiwu}){
        state.shiwu[0].topics=state.shiwu[0].topics.concat(...shiwu);
    },
    [SETNEWPRODUCTS](state,{newProducts}){
        state.newProducts=newProducts;
    },
    [SETTOPICHOMES](state,{topicHomes}){
        state.topicHomes=topicHomes;
    },
    [SETSHIWUINIT](state,{data}){
        let shiwuArr=[];
        data.forEach(({topics})=>{
            let list=topics.filter((topic)=>topic.type===1||topic.type===2||topic.type===7);
            shiwuArr=shiwuArr.concat(list);
        });
        state.ShiWuList=shiwuArr;
    },
    [SETSHIWULIST](state,{data}){
        if(data.length>0&&data[0].look){
             let shiwuArr=[];
             data.forEach((item)=>{
                 if(item.topics.length>0) {
                    shiwuArr=shiwuArr.concat(...item.topics);
                 }
            })
            state.ShiWuList=state.ShiWuList.concat(shiwuArr)
        }else{
            state.ShiWuList=state.ShiWuList.concat(data);
        }
    },
    [RESETSHIWULIST](state){
        state.ShiWuList=[];
    },
}