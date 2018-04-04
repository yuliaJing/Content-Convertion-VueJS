<template>
  <div class="hello">
    <app-header></app-header>
    <app-section></app-section>
  </div>
</template>

<script>
import Header from './header.vue'
import Section from './section.vue'
export default {
  name: 'HelloWorld',
  components: {
    'app-header': Header,
    'app-section': Section
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
