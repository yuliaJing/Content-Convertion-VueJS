<template>
  <div>
    {{ outputContent }}
  </div>
</template>

<script>
import {eventBus} from '../main'
export default {
  data: function () {
    return {
      outputContent: 'default output'
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
    height: 100px;
    border: black solid;
    margin: 5px;
  }
</style>
