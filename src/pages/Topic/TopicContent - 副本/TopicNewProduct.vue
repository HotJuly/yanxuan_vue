<template>
    <div class="list">
        <div v-if="newProducts.length>0">
            <TopicItem v-for="product  in newProducts" :key="product.topicId" :product="product"/>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import {mapState} from 'vuex';
import TopicItem from './TopicNewProduct/TopicItem';
export default {
    computed:{
        ...mapState(['newProducts'])
    },
    mounted(){
        this.$store.dispatch('getNewProducts',()=>{
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
