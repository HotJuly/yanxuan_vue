<template>
  <div class="wrap">
    <div class="search">
      <span></span>
      <input type="text" ref="search" v-model="searchText" :placeholder="searchValue" @focus="isShow=true" @blur="handleBlur" @keydown.13="handleSearch">
    </div>

    <div class="searchList" v-if="isShow&&searchResult.length>0">
      <ul>
        <li v-for="(result,index) in searchResult" :key="index">
          {{result}}
        </li>
      </ul>
    </div>

    <div class="initList" v-if="searchInitList.hotKeywordVOList">
      <span>热门搜索</span>
      <ul>
        <li v-for="(keyword,index) in searchInitList.hotKeywordVOList" :class="{highlight:keyword.highlight}" :key="index">
          <a :href="keyword.schemeUrl">
            {{keyword.keyword}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    data(){
      return {
        searchText:"",
        isShow:false
      }
    },
    computed:{
      ...mapState(['searchResult','searchInitList']),
      searchValue(){
        if(this.searchInitList.defaultKeyword){
          return this.searchInitList.defaultKeyword.keyword;
        }
      }
    },
    methods:{
      handleBlur(){
        this.isShow=false;
        this.$store.dispatch('resetSearchResult')
      },
      handleSearch(){
        let keyword=this.searchText;
        // if(!keyword){
        //   keyword=this.$refs.search.placeholder;
        //   console.log(keyword);
        // }
        this.$store.dispatch('getSearchGoods',{keyword})
      }
    },
    watch:{
      searchText(){
        this.$store.dispatch('getSearchResult',{keywordPrefix:this.searchText})
      }
    },
    mounted(){
      this.$store.dispatch('getSearchInit');
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../commons/mixins.styl"
  .wrap
    width: 100%
    font-size .32rem
    .search
      width: 100%
      height: .9rem
      padding 0 .3rem
      display flex
      justify-content center
      align-items center
      border: 1px solid gray
      input
        width: 90%
        height: 50%
        outline none

      span
        display: inline-block;
        vertical-align: middle;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: .28rem;
        height: .28rem;
        margin-right: .1rem;



    .searchList
      width: 100%
      position absolute
      top: .9rem
      z-index 9
      padding 0 .3rem
      ul
        width: 100%
        li
          width: 100%
          height: .8rem
          line-height .8rem
          bottom-border-1px(gray)
          background-color: white
    .initList
      padding: 0.3rem 0.3rem;
      background-color: #fff;
      overflow: hidden;
      ul
        margin-right: -0.3rem;
        margin-bottom: -0.32rem;
        width 100%
        display flex
        justify-content flex-start
        flex-wrap wrap
        font-size 0.24rem
        li
          padding: 0 0.15rem;
          flex-shrink 0
          margin-right: 0.32rem;
          margin-bottom: 0.32rem;
          line-height: 0.46rem;
          border: 0.01rem solid #999;
          border-radius: 0.04rem;
          color: #333;
          &.highlight
            border-color: #b4282d;
            color: #b4282d!important;




</style>
