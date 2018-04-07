<template>
  <div id="output">
      <select name="filter" id="output-filter" v-model="sort">
        <option value="default">sorted by</option>
        <option value="firstName">First Name</option>
        <option value="lastName">Last Name</option>
        <option value="gender">Gender</option>
        <option value="dob">Date of Birth</option>
        <option value="color">Color</option>
      </select>
    <div id="output-field">
      <p v-for="(outputLine, index) in outputContent" :key="index">
        <span v-for="(val, key) in outputLine" :key="key">{{ val }} </span>
      </p>
    </div>

  </div>
</template>

<script>
import {eventBus} from '../main'
export default {
  data: function () {
    return {
      outputContent: [],
      sort: 'default'
    }
  },
  watch: {
    sort: function () {
      if (this.sort === 'dob') {
        this.sortByDate(this.sort)
      } else if (this.sort !== 'default') {
        this.sortByString(this.sort)
      }
    }
  },
  methods: {
    sortByString: function (str) {
      this.outputContent.sort(function (person1, person2) {
        return (person1[str] < person2[str]) ? -1 : (person1[str] > person2[str]) ? 1 : 0
      })
    },
    sortByDate: function (date) {
      this.outputContent.sort(function (person1, person2) {
        let array1 = person1.dob.split('/')
        let array2 = person2.dob.split('/')
        let year1 = array1[2]
        let month1 = array1[0]
        let day1 = array1[1]
        let year2 = array2[2]
        let month2 = array2[0]
        let day2 = array2[1]
        if (year1 !== year2) {
          return (year1 < year2) ? -1 : 1
        } else if (month1 !== month2) {
          return (month1 < month2) ? -1 : 1
        } else {
          return (day1 < day2) ? -1 : (day1 > day2) ? 1 : 0
        }
      })
    }
  },

  /*
  * @function: bind inputContent: [] to outputContent: [] when loading
  *
  * @param: inputContent: []
  */
  created: function () {
    eventBus.$on('contentChanged', (content) => {
      this.outputContent = content
    })
  }
}
</script>

<style scoped>
  #output {
    height: 500px;
    margin-left: 55%;
    width: 40%;
    text-align: left;
    padding: 1%;
    background-color: whitesmoke;
    overflow: scroll;
  }

  #output-filter{
    float: right;
    color: gray;
  }
</style>
