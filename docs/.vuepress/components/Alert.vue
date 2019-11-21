<template>
  <div class="popover" ref='popover'>
    <h3>{{msg}}</h3>
  </div>
</template>
<script>
export default {
  created: function(){

  },
  props:["msg"],
  watch: {
    'msg': function(newdata, olddata){
      console.log(olddata)
      if(!olddata){
        setTimeout(()=>{
          this.$emit('coco','')
        },1000)
      }
    },
  }
}
</script>
<style lang="stylus">
.popover
  position fixed
  top 5%
  left 50%
  margin -0px 0 0 -70px
  width 100px
  background-color lighten($accentColor, 90%)
  padding 0 20px 0
  border-radius 4px
  overflow hidden
  box-shadow 0 1px 5px rgba(0, 0, 0, 0.4)
  z-index 9999
  text-align center
  h3
    color lighten($textColor, 40%)
    font-size 18px
    font-weight bold
    text-align center
    margin 0 15px 0
</style>