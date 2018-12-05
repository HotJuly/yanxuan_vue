
import {SETTOPICLIST,SETFOCUSLIST,SETCATELIST,SETTAGLIST,SETPOLICYDESCLIST} from './mutations-type';

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
}