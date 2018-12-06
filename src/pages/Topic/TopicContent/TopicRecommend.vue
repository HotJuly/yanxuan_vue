<template>
    <div class="list">
        <div v-if="shiwu.length>0">
            <TopicItem :ad="info.ad" v-if="info.ad"/>
            <TopicItem v-for="(topic,index) in info.topics" :key="index" :topic="topic"/>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import {mapState} from 'vuex';
import TopicItem from './TopicRecommend/TopicItem';
export default {
    data(){
        return {
            curIndex:0
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
    },
    computed:{
        ...mapState(['shiwu']),
        info(){
            console.log(this.shiwu[this.curIndex])
            return this.shiwu[this.curIndex];
        }
    },
    mounted(){
        this.setcurIndex();
        this.$store.dispatch('getShiWu',()=>{
            this.$nextTick(()=>{
                new BScroll('.list',{
                    click:true
                })
            })
        });
    },
    components:{
        TopicItem
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
