<template>
    <div class="m-tpls m-tpls-new">
        <a :href="product.schemeUrl">
            <div class="title">{{product.title}}</div>
            <div class="content">{{product.subTitle}}</div>
        </a>
        <ul class="m-gplist">
            <li v-for="item in product.itemList" :key="item.itemId">
                <img :src="item.itemUrl" alt="" width="100%" height="100%">
            </li>
        </ul>
        <div class="u-rcount">
            <i class="ico"></i>
            <span>{{product.readCount/1000}}k人看过</span>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
};
</script>

<style lang="stylus" scoped>
.m-tpls {
    width: 100%;
    background: #fff;
    margin: 0.2rem 0;
    padding: 0.36rem 0.3rem;

    a {
        color: inherit;
        .title {
            width: 100%;
            color: #333;
            font-size: 0.36rem;
            line-height: 0.54rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-family: PingFangSC-Regular;
        }

        .content {
            font-size: 0.28rem;
            color: #7F7F7F;
            line-height: 0.4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-top: 0.08rem;
        }
    }

    .m-gplist {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0.24rem 0;

        li {
            width: 1.66rem;
            height: 1.66rem;
            border-radius: 0.04rem;
            overflow: hidden;
            background: #f4f4f4;
            margin-bottom: 0.08rem;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .u-rcount{
            margin-bottom: -.16rem;
            font-size: .22rem;
            color: #999;
            line-height: .32rem;
            margin-top: .18rem;
            .ico{
                display: inline-block;
                width: .28rem;
                height: .2rem;
                vertical-align: middle;
                background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR…UMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==') no-repeat;
                margin-right: .08rem;
                background-size 100% 100%
            }
            span{
                display: inline-block;
                vertical-align: middle;
            }
        }
}
</style>
