<template>
    <div class="tps2">
        <a :href="card.schemeUrl">
            <div class="info">
                <div class="info">
                    <div class="name">
                        <span class="ava">
                            <img :src="card.avatar" alt="" width="100%" height="100%">
                        </span>
                        <span>{{card.nickname}}</span>
                    </div>
                    <div class="title">{{card.title}}</div>
                    <div class="desc">{{card.subTitle}}</div>
                    <div class="rcount">
                        <i class="icon"></i>
                        <span>{{(card.readCount/1000).toFixed(1)}}k人看过</span>
                    </div>
                </div>
            </div>
            <div class="pic" :style="`background:url(${card.picUrl});background-size:auto 100%;background-position-x:50%`">
                <!-- <img :src="card.picUrl" alt="" width="100%" height="100%"> -->
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
.tps2{
    position: relative;
    padding: 0.32rem 0.3rem;
    width: 100%;
    height 3.36rem
    background: #fff;
    margin: 0.2rem 0;
    .info{
        width: 4rem;
        float left
        .name{
            font-size: 0.28rem;
            color: #333;
            line-height: 0.36rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            span{
                display: inline-block;
                vertical-align: middle;
            }
            .ava{
                width: 0.56rem;
                height: 0.56rem;
                overflow: hidden;
                border-radius: 50%;
                border: 0.01rem solid #d9d9d9;
                margin-right: 0.12rem;
            }
        }
        .title{
            width: 100%;
            font-size: .36rem;
            color: #333;
            line-height: .44rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            padding-top: .32rem;
            font-family: PingFangSC-Regular
        }
        .desc{
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 0.28rem;
            line-height: 0.4rem;
            padding-top: 0.08rem;
            color: #7f7f7f;
        }
        .rcount{
            position: absolute;
            left: 0.3rem;
            bottom: 0.26rem;
            font-size: 0.22rem;
            color: #999;
            line-height: 0.32rem;
            margin-top: 0.18rem;
            .icon{
                display: inline-block;
                width: 0.28rem;
                height: 0.2rem;
                vertical-align: middle;
                background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==') no-repeat;
                margin-right: 0.08rem;
                background-size:100% 100%;
            }
            span{
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
    .pic{
        width: 2.72rem;
        height: 2.72rem;
        position: relative;
        overflow: hidden;
        border-radius: 0.08rem;
        // background: #f0f0f0;
        background-size auto 100%
        img{
            display inline-block
            // width 100%
            height 100%
        }
    }
    
}
</style>
