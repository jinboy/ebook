<template>
  <div class="ebook">
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <EbookMenu></EbookMenu>
  </div>
</template>
<script>
  import EbookReader from '../../components/ebook/EbookReader'
  import EbookTitle from '../../components/ebook/EbookTitle'
  import EbookMenu from '../../components/ebook/EbookMenu'

  export default {
    components: {
      EbookReader,
      EbookTitle,
      EbookMenu
    }
  }
</script>

<style lang="scss" rel="stylesheet" scoped>
  @import "../../assets/styles/global";
</style>
