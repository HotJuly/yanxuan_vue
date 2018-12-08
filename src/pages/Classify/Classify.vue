<template>
    <div class="classify">
        <header>
            <div class="topSearchIpt" @click="$router.replace('/search')">
                <i class="icon"></i>
                <span class="placeholder">搜索商品, 共19972款好物</span>
            </div>
        </header>
        <div class="content">
            <div class="left">
                <div class="wrap">
                    <ul>
                        <li class="item" :class="{active:curIndex==index}" v-for="(cate,index) in category" :key="cate.id" @click="curIndex=index">
                            {{cate.name}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <div>
                    <img :src="category[curIndex].wapBannerUrl" v-if="category.length>0"/>
                    <div class="cateList" v-if="categoryList&&categoryList.length>0">
                        <ul class="list" style="display:block;" v-for="categoryObj in categoryList" :key="categoryObj.id">
                            <div class="hd">{{categoryObj.name}}</div>
                            <li v-for="category in categoryObj.categoryList" :key="category.id" style="float:left;margin-right:0.32rem">
                                <a :href="`http://m.you.163.com/item/list?categoryId=${categoryObj.id}&subCategoryId=${category.id}`">
                                    <div class="img">
                                        <img :src="category.wapBannerUrl" />
                                    </div>
                                    <div class="name">
                                        {{category.name}}
                                    </div>
                                </a>
                            </li>
                            <li class="itemempty"></li>
                        </ul>
                    </div>
                    
                    <div class="cateList" v-else>
                        <ul class="list">
                            <li v-for="subCate in subCateList" :key="subCate.id">
                                <a :href="`http://m.you.163.com/item/list?categoryId=${subCate.id}&subCategoryId=${subCate.id}`">
                                    <div class="img">
                                        <img :src="subCate.wapBannerUrl" />
                                    </div>
                                    <div class="name">
                                        {{subCate.name}}
                                    </div>
                                </a>
                            </li>
                            <li class="itemempty"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
import BScroll from 'better-scroll';
export default {
    data(){
        return {
            curIndex:0
        }
    },
    computed:{
        ...mapState(['category']),
        ...mapGetters(['subCateLists','categoryLists']),
        subCateList(){
            return this.subCateLists[this.curIndex];
        },
        categoryList(){
            return this.categoryLists[this.curIndex];
        }
    },
    mounted(){
        this.$store.dispatch('getCategory',()=>{
            this.$nextTick(()=>{
                this.leftScroll=new BScroll('.left',{
                    click:true
                });
                this.rightScroll=new BScroll('.right',{
                    click:true
                });
            console.log(this.cateList)
            })
        });
        // this.$store.dispatch('getCategoryList')
    }
};
</script>

<style lang="stylus" scoped>
@import '../../commons/mixins.styl';

.classify {
    width: 100%;
    height: 100%;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.88rem;
    background-color: white;
    padding: 0.16rem 0.3rem;
    box-sizing: border-box;
    display: flex;
    z-index: 100;
    align-items: center;

    .topSearchIpt {
        i {
            display: inline-block;
            width: 0.28rem;
            height: 0.28rem;
            vertical-align: middle;
            background-image: url('./images/search.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            margin-right: 0.1rem;
        }

        flex-grow: 1;
        color: #666;
        font-size: 0.28rem;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        width: 4.42rem;
        height: 0.56rem;
        background-color: #ededed;
        border-radius: 0.1rem;
    }
}

.content {
    height: 100%;
    width:100%;
    font-size: 0.28rem;
    padding-top: 0.89rem;
    overflow: hidden;
    clearFix();

    .left {
        float: left;
        margin-right: 0.02rem;
        height 100%
        background-color: #fff;
        overflow: hidden;
        >.wrap{
            padding: 0.4rem 0 0.97rem;
            ul {
                width: 1.6rem;
                text-align: center;

                li {
                    width: 100%;
                    height: 0.5rem;
                    margin-bottom: 0.4rem;
                    line-height: 0.5rem;
                    position: relative;

                    &.active {
                        color: #ab2b2b;

                        &::before {
                            content: ' ';
                            display: block;
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 0.06rem;
                            height: 100%;
                            background-color: #ab2b2b;
                        }
                    }
                }
            }
        }

    }

    .right {
        float: left;
        background-color: #fff;
        width:5.88rem;
        height:100%;
        >div{
            padding: 0.3rem 0.3rem 0.97rem;
            >img {
                width: 5.28rem;
                height: 1.92rem;
                display: block;
                margin-bottom: 0.32rem;
            }

            >.cateList {
                .hd{
                    white-space: nowrap;
                    max-width: 5.28rem;
                    padding-bottom: 0.08rem;
                    margin-bottom: 0.24rem;
                    text-align: left;
                    font-size: 0.28rem;
                    font-weight: 700;
                    border-bottom: 0.01rem solid #d9d9d9;
                }
                .list {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap wrap
                    clearFix()
                    // &::after{
                    //     // content:" ";
                    //     // display block
                    //     // flex:auto;
                    //     height: 0px;
                    // }

                    li {
                        width:1.44rem;
                        display: flex;
                        justify-content: center;
                        &.itemempty{
                            height: 0px;
                        }
                        .img {
                            width: 1.44rem;
                            height: 1.44rem;

                            >img {
                                width: 100%;
                                height: auto;
                            }
                        }

                        .name {
                            font-size: 0.24rem;
                            height: 0.72rem;
                            text-align: center;
                            line-height: 0.36rem;
                            color: #333;
                        }
                    }
                }
            }
        }
    }
}
</style>
