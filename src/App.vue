<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {}// 不加可能引起渲染报错
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize// 设置fontSize最大为50
    html.style.fontSize = fontSize + 'px'
  })
</script>

<style lang="scss" scoped>
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
