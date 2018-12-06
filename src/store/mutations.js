
import {SETTOPICLIST,SETFOCUSLIST,SETCATELIST,SETTAGLIST,SETPOLICYDESCLIST,SETCATEGORY,SETCATEGORYLIST,SETSHIWU} from './mutations-type';

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
}