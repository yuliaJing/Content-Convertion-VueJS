<template>
  <div>
    <textarea rows="5" cols="200" v-model="inputContent"> </textarea>
  </div>
</template>

<script>
import {eventBus} from '../main'
export default {
  data: function () {
    return {
      inputContent: 'default input'
    }
  },
  watch: {
    inputContent: function () {
      eventBus.$emit('contentChanged', this.inputContent)
    }
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
