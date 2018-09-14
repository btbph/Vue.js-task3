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
        display: table-row;
        line-height: 2;
        border-radius: 4px;

        &:hover {
            background-color:$backGRoundHoverItem;
            cursor: default;
        }
    }
</style>
