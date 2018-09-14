<template>
  <div id="app">
      <div class="globalWr">
          <h2 class="nameHead">List of names</h2>
          <div class="nameContainer">
              <ShowName v-for="(name, index) in nameArr" :key="index" :name="name"/>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      nameArr: ['Kate', 'Max', 'John', 'Lisa', 'Anna', 'Bob', 'Nick', 'Conor', 'Bill']
    }
  }
}
</script>

<style lang="scss" scoped>

    .nameHead {
        font-size: 40px;
        font-weight: normal;
        text-align: center;
    }


    .nameContainer {
        display: table;
        margin: 0 auto;
        font-size: 25px;
    }
</style>