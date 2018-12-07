import {reqTopicList,reqFocusList,reqCateList,reqTagList,reqPolicyDescList,reqCategory,reqCategoryList,reqShiWu,reqNewProducts,reqTopicHomes,reqShiWuMore,reqShiWuList,reqShiWuInit,reqShiWuTabs} from '../api';
import {SETTOPICLIST,SETFOCUSLIST,SETCATELIST,SETTAGLIST,SETPOLICYDESCLIST,SETCATEGORY,SETCATEGORYLIST,SETSHIWU,SETNEWPRODUCTS,SETTOPICHOMES,SETSHIWUMORE,SETSHIWUINIT,SETSHIWULIST,RESETSHIWULIST,SETSHIWUTABS} from './mutations-type';
export default {
    async getFocusList({commit},cb){
        const result = await reqFocusList();
        if(!result.code){
            commit(SETFOCUSLIST,{focusList:result.data});
            typeof cb === "function" && cb();
        }
    },
    async getCateList({commit}){
        const result = await reqCateList();
        if(!result.code){
            commit(SETCATELIST,{cateList:result.data});
        }
    },
    async getTagList({commit}){
        const result = await reqTagList();
        if(!result.code){
            commit(SETTAGLIST,{tagList:result.data});
        }
    },
    async getPolicyDescList({commit}){
        const result = await reqPolicyDescList();
        if(!result.code){
            commit(SETPOLICYDESCLIST,{policyDescList:result.data});
        }
    },
    async getCategory({commit},cb){
        const result = await reqCategory();
        if(!result.code){
            commit(SETCATEGORY,{category:result.data});
            typeof cb=="function"&&cb();
        }
    },
    async getCategoryList({commit}){
        const result = await reqCategoryList();
        if(!result.code){
            commit(SETCATEGORYLIST,{categoryList:result.data});
        }
    },
    async getShiWu({commit},cb){
        const result = await reqShiWu();
        if(!result.code){
            commit(SETSHIWU,{shiwu:result.data});
            typeof cb=="function"&&cb();
        }
    },
    async getNewProducts({commit},cb){
        const result = await reqNewProducts();
        if(!result.code){
            commit(SETNEWPRODUCTS,{newProducts:result.data});
            typeof cb=="function"&&cb();
        }
    },
    async getTopicHomes({commit},cb){
        const result = await reqTopicHomes();
        if(!result.code){
            commit(SETTOPICHOMES,{topicHomes:result.data});
            typeof cb=="function"&&cb();
        }
    },

    //获取设置推荐栏目的首屏数据
    async getShiWuInit({commit},{cb}){
        const result = await reqShiWuInit();
        if(result.code==200){
            commit(SETSHIWUINIT,{data:result.data});
            typeof cb=="function"&&cb();
        }
    },

    //加载更多Card,及除推荐栏目外的首屏数据
    async getShiWuMore({commit},{id,cb,page}){
        let result;
        if(id===9){
            result = await reqShiWuMore(page);
        }else{
            result = await reqShiWuList(id,page);
        }
        if(result.code==200){
            commit(SETSHIWULIST,{data:result.data.result});
            typeof cb=="function"&&cb();
        }
    },

    //清空ShiWuList数组
    async resetShiWuList({commit}){
        commit(RESETSHIWULIST);
    },

    //获取设置ShiWuTabs数组
    async getShiWuTabs({commit},{cb}){
        const result = await reqShiWuTabs();
        if(result.code==200){
            commit(SETSHIWUTABS,{ShiWuTabs:result.data});
            typeof cb=="function"&&cb();
        }
    },
}