<template>
    <div class="tpl1" style="height:4.48rem">
        <a :href="card.schemeUrl" >
            <div class="pic">
                <img :src="card.picUrl"/>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props:{
        card:Object
    }
    
}
</script>

<style lang="stylus" scoped>

.tpl1{
    width 100%
    height 6.74rem
    pcardding 0.36rem 0.3rem
    margin 0.2rem 0;
    background-color #fff
    a{
        display block
        width 100%
        height 100%
        .pic{
            width: 6.9rem;
            height: 3.76rem;
            position: relative;
            margin-bottom: .2rem;
            overflow: hidden;
            border-rcardius: .08rem;
            img{
                width 100%
                height 100%
            }
        }
    }
}


</style>
