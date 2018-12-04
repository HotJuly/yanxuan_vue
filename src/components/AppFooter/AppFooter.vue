<template>
    <footer class="footer_guide border-1px">
        <span href="javascript:;" class="guide_item" :class="{on:$route.path==='/home'}" @click="handleC('/home')">
            <span class="item_icon">
                <i class="icon icon_home"></i>
            </span>
            <span>首页</span>
        </span>
        <span href="javascript:;" class="guide_item" :class="{on:$route.path==='/classify'}" @click="handleC('/classify')">
            <span class="item_icon">
                <i class="icon icon_classify"></i>
            </span>
            <span>分类</span>
            </span>
        <span href="javascript:;" class="guide_item" :class="{on:$route.path==='/topic'}" @click="handleC('/topic')">
            <span class="item_icon">
                <i class="icon icon_topic" :class="{on:$route.path==='/topic'}"></i>
            </span>
            <span>识物</span>
        </span>
        <span href="javascript:;" class="guide_item" :class="{on:$route.path==='/shopcart'}" @click="handleC('/shopcart')">
            <span class="item_icon">
                <i class="icon icon_shopcart"></i>
            </span>
            <span>购物车</span>
        </span>
        <span href="javascript:;" class="guide_item" :class="{on:$route.path==='/login'}" @click="handleC('/login')">
            <span class="item_icon">
                <i class="icon icon_login"></i>
            </span>
            <span>我的</span>
        </span>
  </footer>
</template>

<script>
import "./imgaes/AppFooter.png";
export default {
  methods: {
    handleC(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../commons/mixins.styl';

.footer_guide { // footer
    top-border-1px(#e4e4e4);
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 0.97rem;
    display: flex;

    .guide_item {
        display: flex;
        flex: 1;
        text-align: center;
        flex-direction: column;
        align-items: center;
        // margin: 5px;
        color: #999999;

        &.on {
            color: red;

            .icon_home {
                background-position-y: -2.62rem !important;
            }

            .icon_classify {
                background-position-y: -1.31rem !important;
            }

            .icon_topic {
                background-position-y: -3.96rem !important;
            }

            .icon_shopcart {
                background-position-y: 0rem !important;
            }

            .icon_login {
                background-position-y: -5.26rem !important;
            }
        }

        span {
            font-size: 0.24rem;
            margin-bottom: 0.02rem;

            .icon {
                margin-top: 0.02rem;
                display: block;
                width: 0.56rem;
                height: 0.56rem;
                background: url('./images/AppFooter.png') no-repeat;
                background-size: cover;

                &.icon_home {
                    background-position-y: -3.3rem;
                }

                &.icon_classify {
                    background-position-y: -2rem;
                }

                &.icon_topic {
                    background-position-y: -4.64rem;
                }

                &.icon_shopcart {
                    background-position-y: -0.66rem;
                }

                &.icon_login {
                    background-position-y: -5.95rem;
                }
            }
        }
    }
}
</style>
