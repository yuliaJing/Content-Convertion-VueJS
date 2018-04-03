<template>
  <div>
    <app-input class="input"></app-input>
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
    height: 600px;
    border: gray solid;
  }
</style>
