<template>
  <div contenteditable="true" @input="updateInput">
    <span v-for="(val, key) in inputContent" :key="key"> </span>
  </div>
</template>

<script>
import {eventBus} from '../main'
export default {
  data: function () {
    return {
      inputContent: {
        lastName: 'Kelly',
        firstName: 'Sue',
        gender: 'Female',
        dob: '7/12/1959',
        color: 'Pink'
      }
    }
  },
  watch: {
    inputContent: function () {
      eventBus.$emit('contentChanged', this.inputContent)
    }
  },
  methods: {
    updateInput: function () {
      let text = this.$el.innerText
      let newContent = {}
      let HashSet = require('hashset')
      let splitSet = new HashSet(' ', '|', ',')
      let maleSet = new HashSet('M', 'MALE')
      let femaleSet = new HashSet('F', 'FEMALE')

      let words = text.split(/[\s,|]+/)

      let count = words.length
      if (count < 5) {
        newContent = null
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
      this.inputContent = newContent
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
