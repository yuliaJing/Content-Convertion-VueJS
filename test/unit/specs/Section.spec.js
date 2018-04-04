import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import Section from '@/components/section'
import Input from '@/components/input'
import Output from '@/components/output'


describe('Section.vue', () => {
  it('should display convert label', () => {
    const vm = new Vue(Section).$mount()
    expect(vm.$el.querySelector('#convert').textContent)
      .toEqual('convert to')
  })

})

describe('Input.vue', () => {
  it('should display correct input', () => {
    const vmInput = new Vue(Input).$mount()
    vmInput.$el.innerHTML = 'Kournikova Anna F F 6-3-1975 Red'
    expect(vmInput.$el.textContent)
      .toBe('Kournikova Anna F F 6-3-1975 Red')
  })
})

describe('Output.vue', () => {
  it('should render correct outputContent', done => {
    const outputData = [{
      firstName: 'Kournikova',
      lastName: 'Anna',
      gender: 'Female',
      dob: '6/3/1975',
      color: 'Red'
    }]
    const vmOutput = new Vue(Output).$mount()
    vmOutput.outputContent = outputData

    // wait a "tick" after state change before asserting DOM updates
    Vue.nextTick(() => {
      expect(vmOutput.$el.textContent).toBe('Kournikova Anna Female 6/3/1975 Red ')
      done()
    })
  })

  it('should update outputContent when inputContent changes', done => {
    const inputData = [{
      firstName: 'Kournikova',
      lastName: 'Anna',
      gender: 'Female',
      dob: '6/3/1975',
      color: 'Red'
    }]
    const vmOutput = new Vue(Output).$mount()
    const vmInput = new Vue(Input).$mount()
    vmInput.inputContent = inputData

    // wait a "tick" after state change before asserting DOM updates
    Vue.nextTick(() => {
      expect(vmOutput.$el.textContent).toBe('Kournikova Anna Female 6/3/1975 Red ')
      done()
    })
  })
})

