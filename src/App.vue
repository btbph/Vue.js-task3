<template>
  <div id="app">
      <div class="globalWrapper">
        <div class="namesContainer">
          <h2 class="nameHead">List of names</h2>
          <div class="arrow" @click="toggleIsSorted"/>
          <div class="nameContainer">
            <ShowName v-for="(name, index) in showNameArr" :key="index" :name="name"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      nameArr: ['Kate', 'Max', 'John', 'Lisa', 'Anna', 'Bob', 'Nick', 'Conor', 'Bill'],
      isSorted: false
    }
  },
  computed: {
    sortedNamesArr() {
      return this.nameArr.concat().sort()
    },
    showNameArr() {
      return this.isSorted ? this.sortedNamesArr : this.nameArr
    }
  },
  methods: {
    toggleIsSorted() {
      this.isSorted = !this.isSorted
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
    position: relative;
  }

  .namesContainer {
    width: 50%;
    margin: 0 auto;
    background-color: white;
    box-shadow: 21px 10px 64px -8px rgba(0,0,0,0.75);

    .arrow {
      background-image: url("./assets/arrow.png");
      background-size: contain;
      position: absolute;
      height: 50px;
      width: 50px;
      left: 375px;
      cursor: pointer;
    }

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