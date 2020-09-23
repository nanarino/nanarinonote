<template>
  <main class="home" aria-labelledby="main-title" onselectstart="return false;">
    <header class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" @load="iconload($event)">
      <canvas ref="canvas" @click="coco('YABEEI!')"></canvas>
      <Alert @coco='coco' :msg="msg"/>
      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Coco' }}</h1>

      <p class="description">
        {{ data.tagline || $description || 'Coco' }}
      </p>

      <p class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button" :item="actionLink"/>
      </p>
    </header>

    <div class="features" v-if="data.features && data.features.length">
      <div class="feature" v-for="(feature, index) in data.features" :key="index">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom"/>

    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@vuepress/theme-default/components/NavLink.vue'

export default {
  components: { NavLink },
  created: function(){
    this.date = new Date
  },
  data(){
    return {
      msg:''
    }
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
  methods:{
    iconload(event) {
      const {width, height} = event.target
      Object.assign(this.$refs.canvas, {width, height})
      const c = this.$refs.canvas.getContext("2d")
      c.fillStyle = c.createPattern(event.target, "repeat")
      c.rect(0, 0, width, height)
      c.fill()
      const px = c.getImageData(0, 0, width, height)
      
      //定义动画函数【coco黑化】
      const toBlack = time => {
        for(let i = 0; i < px.data.length; i += 4) {
          if(+Math.random().toFixed())continue;
          px.data[i] *= 0.99
          px.data[i+1] *= 0.98
          px.data[i+2] *= 0.98
        }
        c.putImageData(px, 0, 0)
        if(new Date - this.date > 4000){
          //【coco黑化】完成后回调【coco亮眼】
          cancelAnimationFrame(toBlack)
          briEye(time)
        }else{
          requestAnimationFrame(toBlack)
        }
      }
      
      //定义动画函数【coco亮眼】
      const briEye = time => {
        px.data[1084] = Math.min(36, px.data[1084]*1.2)
        px.data[1085] = Math.min(135, px.data[1085]*1.2)
        px.data[1086] = Math.min(255, px.data[1086]*1.2)
        px.data[1212] = Math.min(252, px.data[1212]*1.2)
        px.data[1213] = Math.min(195, px.data[1213]*1.2)
        px.data[1214] = Math.min(81, px.data[1214]*1.2)
        c.putImageData(px, 0, 0)
        if(px.data[1086] == 255){
          cancelAnimationFrame(briEye)
          if(!this.data.initdate){
            this.$page.frontmatter.initdate = time - 4000
            this.coco('加载耗时' + (time/1000 - 4).toFixed(2) + '秒')
            console.log('加载耗时取决于网络响应时间')
            console.log('咕咕的黑化程度取决于设备性能')
          }
        }else{
          requestAnimationFrame(briEye)
        }
      }
      
      //调用动画【coco黑化】
      toBlack(briEye)
    },
    coco(m){
      this.msg = m
    },
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0 auto
  display block
  .hero
    text-align center
    img
      display none
    canvas
      max-width: 100%
      height 17.5rem
      display block
      margin 3rem auto 1.5rem
      image-rendering pixelated
    canvas:hover
      transform: matrix(-1, 0, 0, 1, 0, 0)
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      canvas
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding .6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
