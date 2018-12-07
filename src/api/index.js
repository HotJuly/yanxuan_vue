import ajax from './ajax';

const BASE='/api';

export const reqTopicList =()=>ajax(`/topicList`);
export const reqFocusList =()=>ajax(`/focusList`);
export const reqCateList =()=>ajax(`/cateList`);
export const reqTagList =()=>ajax(`/tagList`);
export const reqPolicyDescList =()=>ajax(`/policyDescList`);
export const reqCategory =()=>ajax(`/category`);
export const reqCategoryList =()=>ajax(`/categoryList`);
export const reqShiWu =()=>ajax(`/shiwu`);
export const reqShiWuMore =()=>ajax(BASE+`/topic/v1/find/recAuto.json?page=1&size=5&exceptIds=5286,4746,4745,5213,5252,518,5446,5288,4037,4035,4210,5339,4635,4640,3583,3860,4040,3438,4648,4489,4364,4513,2747,3882,4168,3773`);
export const reqNewProducts =()=>ajax(`/newproducts`);
export const reqTopicHomes =()=>ajax(`/topichomes`);