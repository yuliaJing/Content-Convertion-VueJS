<template>
  <div contenteditable="true" @input="updateInput"></div>
</template>

<script>
import {eventBus} from '../main'
export default {
  data: function () {
    return {
      inputContent: 'default input'
    }
  },
  mounted: function () {
    this.$el.innerText = this.inputContent
  },
  watch: {
    inputContent: function () {
      eventBus.$emit('contentChanged', this.inputContent)
    }
  },
  methods: {
    updateInput: function () {
      this.inputContent = this.$el.innerText
    }
  }
}
</script>

<style scoped>
  div{
    height: 500px;
    border: gray solid;
    float: left;
    margin-left: 2%;
    width: 45%;
    text-align: left;
    padding: 1%;
  }
</style>
