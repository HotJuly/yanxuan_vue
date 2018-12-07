
import {SETTOPICLIST,SETFOCUSLIST,SETCATELIST,SETTAGLIST,SETPOLICYDESCLIST,SETCATEGORY,SETCATEGORYLIST,SETSHIWU,SETNEWPRODUCTS,SETTOPICHOMES,SETSHIWUMORE} from './mutations-type';

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
}