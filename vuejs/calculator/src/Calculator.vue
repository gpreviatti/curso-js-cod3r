<template>
  <div class="calculator">
        <Display :value="displayValue"/>
        <Button label="AC" triple @onClick="clearMemory"/>
        <Button label="/" operation @onClick="setOperation"/>
        <Button label="7" @onClick="addDigit"/>
        <Button label="8" @onClick="addDigit"/>
        <Button label="9" @onClick="addDigit"/>
        <Button label="*" operation @onClick="setOperation"/>
        <Button label="4" @onClick="addDigit"/>
        <Button label="5" @onClick="addDigit"/>
        <Button label="6" @onClick="addDigit"/>
        <Button label="-" operation @onClick="setOperation"/>
        <Button label="1" @onClick="addDigit"/>
        <Button label="3" @onClick="addDigit"/>
        <Button label="3" @onClick="addDigit"/>
        <Button label="+" operation @onClick="setOperation"/>
        <Button label="0" @onClick="addDigit"/>
        <Button label="." @onClick="setOperation"/>
        <Button label="=" double @onClick="setOperation"/>
        
  </div>
</template>

<script>

import Display from '../src/components/Display';
import Button from '../src/components/Button';

export default {
    data: function() {
      return {
        displayValue: "0",
        clearDisplay: false,
        operation: null,
        values: [0, 0],
        current: 0
      }
    },
    components: {
      Display,
      Button
    },
    methods: {
      clearMemory() {
        // volta o estado inicial do objeto data
        Object.assign(this.data, this.$options.data())
      },
      setOperation(operation) {
        this.displayValue = this.displayValue + operation
      },
      addDigit(n) {
        if (n === '.' && this.displayValue.includes('.')) {
          return
        }

        const clearDisplay = this.displayValue == '0' || this.clearDisplay
        const currentValue = clearDisplay ? '' : this.displayValue
        const displayValue = currentValue + n

        this.displayValue = displayValue

        this.clearDisplay = false

        if (n !== '.') {
          const i = this.current
          const newValue = parseFloat(displayValue)
          this.values[i] = newValue
        }
      }
    }
}
</script>

<style>
.calculator {
  display: grid;
  width: 250px;
  height: 350px;
  margin: 0 auto;
}
</style>