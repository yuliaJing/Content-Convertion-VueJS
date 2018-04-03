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
    height: 500px;
    border: gray solid;
    margin-left: 50%;
    width: 45%;
    text-align: left;
    padding: 1%;
  }
</style>
