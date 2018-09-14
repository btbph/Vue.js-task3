<template>
    <div class="name">Hello, {{ name }}</div>
</template>

<script>
  export default {
    props: {
      name: { type: String, required: true }
    }
  }
</script>

<style lang="scss" scoped>
    @import "@/variables.scss";
    .name {
      line-height: 2;
      border-top: 2px solid $borderColor;
      background-color: transparent;

      &:hover {
        background-color:$backGRoundHoverItem;
        transition: .4s;
        cursor: default;
      }
    }
</style>
