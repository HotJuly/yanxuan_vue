<template>
    <div class="m-tpls m-tpls-rec">
        <a :href="home.schemeUrl">
            <div class="title">{{home.title}}</div>
            <div class="u-pic">
                <img :src="home.picUrl" alt="" width="100%" height="100%">
            </div>
            <div class="u-rcount">
                <i class="ico"></i>
                <span>{{home.readCount/1000}}k人看过</span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props:{
        home:Object
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
            font-size: 0.36rem;
            color: #333;
            line-height: 0.52rem;
            margin: -0.08rem 0 0.16rem 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            font-family: PingFangSC-Regular;
        }

        .u-pic {
            width: 6.9rem;
            height: 3.76rem;
            position: relative;
            margin-bottom: 0.2rem;
            overflow: hidden;
            border-radius: 0.08rem;

            img {
                display: block;
            }
        }

        .u-rcount {
            margin-bottom: -0.16rem;
            font-size: 0.22rem;
            color: #999;
            line-height: 0.32rem;
            margin-top: 0.18rem;

            .ico {
                display: inline-block;
                width: 0.28rem;
                height: 0.2rem;
                vertical-align: middle;
                background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR…UMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==') no-repeat 0 / 100%;
                margin-right: 0.08rem;
            }

            span {
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
}
</style>
