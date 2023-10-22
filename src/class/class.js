class test {
  constructor(value = null, array = []) {
    this.value = value
    this.array = array
  }
  
  watchValue() {
    return this.value
  }
  
  watchArray() {
    return this.array
  }
  
  watchValueArray(value) {
    const negative = String(value).split('')
    const restNegativeValue = String(value).slice(1)
    
    if (value > this.array.length || restNegativeValue > this.array.length) {
      return -1;
    }
    if (negative[0] === '-'){
      return this.array[this.array.length - restNegativeValue]
    }  
    
    return this.array[value]
  }
}

const myClass = new test('change', [])

myClass.watchValue()
myClass.watchArray()
myClass.watchValueArray(-3)