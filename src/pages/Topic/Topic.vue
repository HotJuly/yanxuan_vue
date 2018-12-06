<template>
    <div style="width:100%;height:100%;overflow:hidden">
        <header>
            <div class="wrap">
                <div class="home" @click="$router.replace('/home')"></div>
                <div class="title">
                    <a href="#" class="item active">发现</a>
                    <a href="#" class="item">甄选家</a>
                </div>
                <div class="util">
                    <div class="shopcart" @click="$router.replace('/home')"></div>
                    <div class="search" @click="$router.replace('/home')"></div>
                </div>
            </div>
            <div class="flexbox">
                <router-link to="/topic/recommend" class="item">推荐</router-link>
                <router-link to="/topic/expert" class="item">达人</router-link>
                <router-link to="/topic/newproduct" class="item">上新</router-link>
                <router-link to="/topic/share" class="item">晒单</router-link>
                <router-link to="/topic/topichome" class="item">HOME</router-link>
            </div>
        </header>
        <router-view/>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>

header{
    position: fixed;
    top:0;
    left:0;
    width 100%
    background-color: #fafafa;
    border-bottom: .01rem solid #d9d9d9;
    z-index:1000;
    .wrap{
        width 100%
        height 1rem
        padding 0 0.26rem 0 0.24rem
        position relative
        .home{
            width 0.46rem
            height 100%
            background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAcNAP9uD9Bfrx5B8v6LSdTgr37N/Uxb14Gtm5r6aVjWhgVTkUgTYpp0pCSlNj4QAAATNJREFUSMfd0+tugyAYBmAUREXtwbNW7Vptu+29//tbsolkahSTbVn6/oM8An4fkKeLL4Kjvn5zgbTT1S8ccYTS08J2A2TUKyF8DX3cAXubkC6F+76qPRPI5XfOda0kAZg09h4wFvWBIbir4Q04L2iDI/FGNXq1J0xtfqKT7TI6q+kJaCZLtRHMYq4kCfjcjz0sWI/J7D0AO5C5FCaidjR3ZaqJ01OOV8qhTjiNXYPn30uyW7ywZ6gG0AyobbKYCth/Ea8EFwZZjgHeH6CCe8M6b1zsPhtd+4YGN/y4koNFrsSf8zZGn+CgwTNYfXiiwU3I++1av8qFBo8VZxqcDZw5m7izjXM93m3hEbwtPEEhebip7qH4ma5eIEyZ0JGvXDjmEIGL4jTFkDAfFmFQSSn5d/kA8eoi0xqdj94AAAAASUVORK5CYII=') no-repeat;
            background-size 100%;
            background-position-y 50%
        }
        .title{
            position absolute
            left 50%
            top 0
            transform translateX(-50%)
            font-size: .28rem;
            line-height: 1rem;
            text-align: center;
            width: 3.2rem;
            .item{
                padding: 0 .16rem;
                vertical-align: middle;
                &.active{
                    font-size: .4rem;
                    color: #b4282d;
                    font-weight: bold;
                }
            }
        }
        .util{
            position absolute
            width 1.4rem
            height 100%
            top 0
            right 0.26rem
            display flex
            justify-content space-between
            div{
                width 0.46rem
            }
            .search{
                background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAk1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM1idyXAAAAMHRSTlMAYbmIKS7ss/BPwREDeAjlt52EIc3HQTs3JRv53djTjn5XFQ2+p6JH9K+XZDJzb12hgxUyAAABlElEQVRIx82V23KCMBCGV8AYAgLlrChaz4ce/vd/utopKks10YvO9LvaMN+E7OZnoP9FCGDgPKzv63SC1KPHWWQ40hMcMXtG32JTHHtGkkbvV1EEM1mje5n8eLf1xLYANRzwSkamu3P1gdhoFyI9ly4GgUn/rNbnsi/DkUkfXk/gZchN+gt6l/pwqg2sUFzqd9gG20+R0LXXaKnXk4kYXxZ9Yeo1l9k1tkuFQq/3sAlafZvuNcbc51PVsmH7ubD0vVooWysnlNpegxROe6lQ6vRR2Jqjude8Uh5PkK0P2EtArNf92rqP6LzcCScSGuYBj5CC69xn5BNnDZeeYA7bf0J3qxXXjYHO+/dIfu+U4T5VvOgeRqC2UkCsB20UIL7HvvKYPQ4xW9Byjqnf+SzqnKioMQv4LUdNdmZsFynKn69zN2IRa8ZewmKXjdVPEeHtth5xXd3Uh82um85hhCzoxJuQCftBTXAYkxdDsMf+qfct0XYKm2dsu8NU1cAnMZYDSKUELI845R6AlVMHbygAOVzQn/MFg0s1dXIHznQAAAAASUVORK5CYII=') no-repeat;
                background-size 100%;
                background-position-y 50%
            }
            .shopcart{
                background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAKlBMVEUAAAA0NDQ0NDQ0NDQ0NDQ0NDQzMzMUFBQ0NDROTk4zMzMzMzMzMzM2NDTc2xHNAAAADXRSTlMAbezXT6YsFM0O+L+FggY9rwAAAP5JREFUOMtjIBOwiTat0ghMQBeeaHsXBC5Logoz6l4KTGcoE9W9JIBiSO9tBzCDZe8NZKOcLgOFIRK2KghhlrWRcPbUWw5wttcdJL1nl8BN1z2AJM5zCWYDx1UUt8U2QBmylijiky9CaE5dBxRxlksTIH66jeb3vRC/MV9BE/c1AFO5CmjiTNcg1gagibNCLI4VQBNnhLi7NwE9Km6AKd0CNHH2S2BqLUbc3cIljsscXPbicicuf+EKB1zhhiuc8cYLZjzij3fMdII9XV3Bng7vXi7Amm4Vbc2xp/NisAbMfMEO0YCZj8AaMPMdTAMmQGhAAPwabmAXZ+9mIBUAAIJuXNa9gIYoAAAAAElFTkSuQmCC') no-repeat
                background-size 100%;
                background-position-y 50%
            }
        }
    }
    .flexbox{
        width 100%
        height 0.72rem
        background: #fafafa;
        border-bottom: 0.01rem solid #d9d9d9;
        font-size 0px
        display flex
        justify-content space-around
        .item{
            display: inline-block;
            height: .72rem;
            line-height: .72rem;
            padding: 0 .08rem;
            margin: 0 .2rem;
            vertical-align: middle;
            font-size: .28rem;
            color: #7F7F7F;
            &.active{
                color: #B4282D;
                border-bottom: 0.035rem solid #B4282D;
            }
        }
    }
    
}

</style>
