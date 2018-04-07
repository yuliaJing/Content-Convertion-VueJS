<template>
  <div contenteditable="true" @input="updateInput" id="input">
  </div>
</template>

<script>
import {eventBus} from '../main'
export default {
  data: function () {
    return {
      inputContent: []
    }
  },
  watch: {
    inputContent: function () {
      eventBus.$emit('contentChanged', this.inputContent)
    }
  },
  methods: {
    /*
    * @function: bind input data to inputContent: []
    */
    updateInput: function () {
      this.inputContent = []
      let text = this.$el.innerText
      let lines = text.split('\n')
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].length > 0) {
          this.updateLine(lines[i])
        }
      }
    },

    /*
    * @function: add each line to inputContent: []
    *
    * @param: text: string
    */
    updateLine: function (text) {
      let newContent = {}
      let HashSet = require('hashset')
      let splitSet = new HashSet('-', '/', '.')
      let maleSet = new HashSet('M', 'MALE')
      let femaleSet = new HashSet('F', 'FEMALE')

      let words = text.split(/[\s,|]+/)

      let count = words.length
      if (count < 5) {
        newContent = null
        return
      }
      // lastName
      newContent.lastName = words[ 0 ]
      // firstName
      newContent.firstName = words[ 1 ]
      // check gender
      let gender = words[ count - 3 ]
      if (maleSet.contains(gender.toUpperCase())) {
        newContent.gender = 'Male'
      } else if (femaleSet.contains(gender.toUpperCase())) {
        newContent.gender = 'Female'
      } else {
        newContent.gender = 'Unknown'
      }
      // check dob
      let isValidDate1 = Date.parse(words[ count - 1 ])
      let isValidDate2 = Date.parse(words[ count - 2 ])
      if (!isNaN(isValidDate1)) {
        let charArray = words[ count - 1 ].split('')
        for (let i = 0; i < charArray.length; i++) {
          charArray[i] = splitSet.contains(charArray[i]) ? '/' : charArray[i]
        }
        newContent.dob = charArray.join('')
        newContent.color = words[ count - 2 ]
      } else if (!isNaN(isValidDate2)) {
        let charArray = words[ count - 2 ].split('')
        for (let i = 0; i < charArray.length; i++) {
          charArray[i] = splitSet.contains(charArray[i]) ? '/' : charArray[i]
        }
        newContent.dob = charArray.join('')
        newContent.color = words[ count - 1 ]
      } else {
        newContent.dob = 'invalid date'
        newContent.color = words[ count - 2 ]
      }
      this.inputContent.push(newContent)
    }
  }
}
</script>

<style scoped>
  div{
    height: 500px;
    float: left;
    margin-left: 2%;
    width: 40%;
    text-align: left;
    padding: 1%;
    background-color: whitesmoke;
    overflow: scroll;
  }
</style>
