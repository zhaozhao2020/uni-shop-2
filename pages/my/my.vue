<template>
  <view>
    My
  </view>
</template>

<script>
  // 导入自己封装的 mixin 模块
  import badgeMix from '@/mixins/tabbar-badge.js'
  export default {
    data() {
      return {
        
      };
    },
    // 将 badgeMix 混入到当前的页面中进行使用
    mixins: [badgeMix],
  }
</script>

<style lang="scss">

</style>
