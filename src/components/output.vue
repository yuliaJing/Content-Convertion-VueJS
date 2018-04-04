<template>
  <div>
    <span v-for="(val, key) in outputContent" :key="key">{{ val }} </span>
  </div>
</template>

<script>
import {eventBus} from '../main'
export default {
  data: function () {
    return {
      outputContent: {
        lastName: 'Kelly',
        firstName: 'Sue',
        gender: 'Female',
        dob: '7/12/1959',
        color: 'Pink'
      }
    }
  },
  methods: {
  },
  created: function () {
    eventBus.$on('contentChanged', (content) => {
      alert('output.vue - changeContent')
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
