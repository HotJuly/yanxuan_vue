<template>
    <div class="list">
        <div>
            <TopicItem v-for="home in topicHomes"  :home="home" :key="home.topicId"/>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import BScroll from 'better-scroll';
import TopicItem from './TopicHome/TopicItem';
export default {
    computed:{
        ...mapState(['topicHomes'])
    },
    mounted(){
        this.$store.dispatch('getTopicHomes',()=>{
            this.$nextTick(()=>{
                new BScroll('.list',{
                    click:true
                })
            })
        })
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
    >div{
        padding 1.73rem 0 0.97rem;
    }
}
</style>
