import {reqTopicList,reqFocusList,reqCateList,reqTagList,reqPolicyDescList,reqCategory,reqCategoryList,reqShiWuMore,reqShiWuList,reqShiWuInit,reqShiWuTabs,reqSearchResult,reqSearchGoods,reqSearchInit} from '../api';
import {SETTOPICLIST,SETFOCUSLIST,SETCATELIST,SETTAGLIST,SETPOLICYDESCLIST,SETCATEGORY,SETCATEGORYLIST,SETSHIWUINIT,SETSHIWULIST,RESETSHIWULIST,SETSHIWUTABS,SETSEARCHRESULT,RESETSEARCHRESULT,SETSEARCHGOODS,SETSEARCHINITLIST} from './mutations-type';
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

    //获取设置searchResult数组
    async getSearchResult({commit},{keywordPrefix,cb}){
        const result = await reqSearchResult(keywordPrefix);
        if(result.code==200){
            commit(SETSEARCHRESULT,{searchResult:result.data});
            typeof cb=="function"&&cb();
        }
    },

    //清空设置searchResult数组
    async resetSearchResult({commit}){
        commit(RESETSEARCHRESULT);
    },

    //清空设置searchGoods数组
    async getSearchGoods({commit},{keyword,cb}){
        const result = await reqSearchGoods(keyword);
        if(result.code==200){
            commit(SETSEARCHGOODS,{searchGoods:result.data.directlyList});
            typeof cb=="function"&&cb();
        }
    },

    //清空设置searchGoods数组
    async getSearchInit({commit}){
        const result = await reqSearchInit();
        if(result.code==200){
            commit(SETSEARCHINITLIST,{searchInitList:result.data});
        }
    },
}