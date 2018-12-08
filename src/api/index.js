import ajax from './ajax';

const BASE='/api';

export const reqTopicList =()=>ajax(`/topicList`);
export const reqFocusList =()=>ajax(`/focusList`);
export const reqCateList =()=>ajax(`/cateList`);
export const reqTagList =()=>ajax(`/tagList`);
export const reqPolicyDescList =()=>ajax(`/policyDescList`);
export const reqCategory =()=>ajax(`/category`);
export const reqCategoryList =()=>ajax(`/categoryList`);
export const reqShiWuMore =(page)=>ajax(BASE+`/topic/v1/find/recAuto.json?page=${page}&size=5&exceptIds=5286,4746,4745,5213,5252,518,5446,5288,4037,4035,4210,5339,4635,4640,3583,3860,4040,3438,4648,4489,4364,4513,2747,3882,4168,3773`);
export const reqShiWuInit =()=>ajax(BASE+`/topic/v1/find/recManual.json`,{onlyOne:true});
export const reqShiWuList =(id,page)=>ajax(BASE+`/topic/v1/find/getTabData.json?page=${page}&size=5&tabId=${id}`,{onlyOne:true});
export const reqShiWuTabs =()=>ajax(BASE+`/topic/v1/find/getTabs.json`);
export const reqSearchResult =(keywordPrefix)=>ajax(BASE+`/xhr/search/searchAutoComplete.json`,{keywordPrefix},"POSTFORM");
export const reqSearchInit =()=>ajax(BASE+`/xhr/search/init.json`);
export const reqSearchGoods =(keyword)=>ajax(BASE+`/xhr/search/search.json?keyword=${keyword}&sortType=0&descSorted=false&categoryId=0&matchType=0&floorPrice=-1&upperPrice=-1&size=40&itemId=0&stillSearch=false&searchWordSource=1&_stat_search=userhand`);