<template>
    <div class="list" ref="list">
        <!-- <pull-to @infinite-scroll="loadmore" v-if="shiwu.length>0">
            <TopicItem :ad="info.ad" v-if="info.ad"/>
            <TopicItem v-for="(topic,index) in info.topics" :key="index" :topic="topic"/>
        </pull-to> -->
        <div v-if="shiwu.length>0">
            <TopicItem :ad="info.ad" v-if="info.ad"/>
            <TopicItem v-for="(topic,index) in info.topics" :key="index" :topic="topic"/>
        </div>
        <div></div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import PullTo from 'vue-pull-to';
import {mapState} from 'vuex';
import TopicItem from './TopicRecommend/TopicItem';
export default {
    data(){
        return {
            curIndex:0,
            shiwuList:[]
        }
    },
    methods:{
         setcurIndex(){
            const path=this.$route.path;
            if(path.includes('/topic/recommend')){
                this.curIndex=0;
            }
            if(path.includes('/topic/expert')){
                this.curIndex=1;
            }
        },
        loadmore(){
            this.$store.dispatch('getShiWuMore');
        }
    },
    computed:{
        ...mapState(['shiwu']),
        info(){
            console.log('+++')
            this.shiwuList=this.shiwu;
            return this.shiwu[this.curIndex];
        }
    },
    watch:{
        shiwu(){
            if(this.bscroll){
                this.bscroll.refresh();
            }
        }
    },
    mounted(){
        this.setcurIndex();
        this.$store.dispatch('getShiWu',()=>{
            this.$nextTick(()=>{
                this.bscroll=new BScroll('.list',{
                    click:true
                })
                this.bscroll.on('scrollEnd',()=>{
                    if(this.bscroll.y===this.bscroll.maxScrollY){
                        this.$store.dispatch('getShiWuMore');
                    }
                })
            })
        });
    },
    components:{
        TopicItem,
        PullTo
    }
}
</script>

<style lang="stylus" scoped>
.list{
    height 100%
    width 100%
    overflow hidden
    // margin 1.73rem 0 0.97rem;
    >div{
        padding 1.73rem 0 0.97rem;
    }
}
</style>
