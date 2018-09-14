<template>
  <div id="app">
      <div class="globalWrapper">
        <div class="namesContainer">
          <h2 class="nameHead">List of names</h2>
          <div class="nameContainer">
            <ShowName v-for="(name, index) in nameArr" :key="index" :name="name"/>
          </div>
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
  @import "@/variables.scss";

  .globalWrapper {
    width: 100%;
    height: 100vh;
    background-color: $bgBodyColor;
  }

  .namesContainer {
    width: 50%;
    margin: 0 auto;
    background-color: white;
    box-shadow: 21px 10px 64px -8px rgba(0,0,0,0.75);

    &:last-child {
      border-bottom: 2px solid $borderColor;
    }

    .nameHead {
      font-size: 40px;
      font-weight: normal;
      text-align: center;
      margin: 0;
    }

    .nameContainer {
      margin: 0 auto;
      font-size: 25px;
    }
  }
</style>