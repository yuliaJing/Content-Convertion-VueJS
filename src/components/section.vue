<template>
  <div>
    <app-input class="input"></app-input>
    <div id="convert">convert to</div>
    <app-output class="output"></app-output>
  </div>
</template>

<script>
import Input from './input.vue'
import Output from './output.vue'
export default {
  data: function () {
    return {
      content: 'default outputContent'
    }
  },
  components: {
    'app-input': Input,
    'app-output': Output
  },
  methods: {
  }
}
</script>

<style scoped>
  .div {
    height: 500px;
    border: gray solid;
  }
  #convert{
    float: left;
    width: 10%;
    height: 500px;
    text-align: center;
    padding-top: 200px;
    padding-bottom: 200px;
  }
</style>
