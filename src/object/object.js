"stric mode"

const ages = { alice: 18, bob: 27 };
const edades = new Object();

ages.esteban = 21
edades.esteban = 21

console.log(ages);
console.log(edades);

const entries = Object.entries(ages)
console.log(entries)

const keys = Object.keys(ages)
console.log(keys)

const values = Object.values(ages)
console.log(values)

const properties = ages.hasOwnProperty('alice')
console.log(properties)