<template>
  <div>
    <p v-for="(outputLine, index) in outputContent" :key="index">
      <span v-for="(val, key) in outputLine" :key="key">{{ val }} </span>
    </p>
  </div>
</template>

<script>
import {eventBus} from '../main'
export default {
  data: function () {
    return {
      outputContent: []
    }
  },
  methods: {
  },
  created: function () {
    eventBus.$on('contentChanged', (content) => {
      this.outputContent = content
    })
  }
}
</script>

<style scoped>
  div{
    height: 500px;
    margin-left: 55%;
    width: 40%;
    text-align: left;
    padding: 1%;
    background-color: whitesmoke;
  }
</style>
