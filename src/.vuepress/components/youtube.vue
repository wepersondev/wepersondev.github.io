<template>
  <div class="youtube">
    <div class="youtube-container">
      <iframe width="100%" height="100%" :src="src" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<style lang="stylus">
.youtube
  position relative
  width 100%
  padding-top 56.25%
  .youtube-container
    position absolute
    top 0
    left 0
    bottom 0
    right 0
</style>

<script>
export default {
  name: 'youtube',
  props: {
    src: String
  }
}
</script>
