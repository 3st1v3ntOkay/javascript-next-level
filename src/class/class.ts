// interface Classic {value: any, array: any[]}

class test {
  value: any
  array: any[]

  constructor(value = 'empty', array = []) {
    this.value = value
    this.array = array
  }
  
  watchValue() {
    return this.value
  }
  
  watchArray() {
    return this.array
  }
  
  watchValueArray(value: number) {
    const negative: string[] = String(value).split('')
    const restNegativeValue: string = String(value).slice(1)
    
    if (value > this.array.length || Number(restNegativeValue) > this.array.length) {
      return -1;
    }
    if (negative[0] === '-'){
      return this.array[this.array.length - Number(restNegativeValue)]
    }  
    
    return this.array[value]
  }
}

const myClass = new test('change', [])

myClass.watchValue()
myClass.watchArray()
console.log(myClass.watchValueArray(-3))