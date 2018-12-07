<template>
    <div class="list" ref="list">
        <div>
            <iframe  v-if="id===7" src="https://m.you.163.com/topic/static/look/index" frameborder="0" allowtransparency="true" name="mframe2"></iframe>
            <div v-for="(card,index) in ShiWuList" v-else>
                <RecommendItem v-if="card.type===2" :card="card" :key="index"/>
                <ExpertItem v-if="card.type===1" :card="card" :key="index"/>
                <NewProductItem v-if="card.type===7" :card="card" :key="index"/>
                <ImageItem v-if="card.type===5" :card="card" :key="index"/>
                <HomeItem v-if="card.type===8" :card="card" :key="index"/>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
import PullTo from "vue-pull-to";
import { mapState } from "vuex";
import RecommendItem from "../../../components/TopicItems/RecommendItem";
import ExpertItem from "../../../components/TopicItems/ExpertItem";
import NewProductItem from "../../../components/TopicItems/NewProductItem";
import ImageItem from "../../../components/TopicItems/ImageItem";
import HomeItem from "../../../components/TopicItems/HomeItem";
export default {
  data() {
    return { page: 1 };
  },
  props: {
    id: Number
  },
  watch: {
    id() {
      let id = this.id;
      this.page = 1;
      const cb=this.bsfresh;
      this.$store.dispatch("resetShiWuList");
      if (id === 9) {
        this.$store.dispatch("getShiWuInit", { cb });
      } else if (id !== 7) {
        this.$store.dispatch("getShiWuMore", {
          id,
          page: this.page,
          cb
        });
      }else{
        cb()
      }
    }
  },
  computed: {
    ...mapState(["ShiWuList"])
  },
  methods: {
    newBScroll() {
      this.$nextTick(() => {
        this.bscroll = new BScroll(".list", {
          click: true,
          pullUpLoad:true
        });
        this.bscroll.on("pullingUp", () => {
            this.page = this.page + 1;
            if (this.id !== 7) {
              let id=this.id;
              const cb=()=>{
                this.$nextTick(()=>{
                  this.bscroll.finishPullUp();
                  this.bscroll.refresh();
                })
              };

              this.$store.dispatch("getShiWuMore", {
                id,
                page: this.page,
                cb
              });
            }
        });
      });
    },
    bsfresh() {
      this.$nextTick(() => {
        this.bscroll.refresh();
      });
    }
  },
  mounted() {
    console.log("mounted");
    let id = this.id;
    const cb = this.newBScroll;
    if (id === 9) {
      this.$store.dispatch("getShiWuInit", { cb });
    } else if (id !== 7) {
      this.$store.dispatch("getShiWuMore", { id, cb, page: this.page });
    }else{
        cb()
    }
  },
  components: {
    RecommendItem,
    NewProductItem,
    ImageItem,
    HomeItem,
    ExpertItem
  }
};
</script>

<style lang="stylus" scoped>
.list {
  height: 100%;
  width: 100%;
  overflow: hidden;

  // margin 1.73rem 0 0.97rem;
  >div {
    padding: 1.73rem 0 0.97rem;
  }

  iframe {
    display: block;
    width: 100%;
    height: 11.6rem;
    left: 0;
    top: 0;
    overflow-x: hidden;
  }
}
</style>
