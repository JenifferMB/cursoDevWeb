const technology = new Map()
technology.set('react', {framework: false})
technology.set('angular', {framework: true})

//console.log(technology.react)
console.log(technology.get('react').framework)

const variableKeys = new Map([
    [function(){ }, 'Function'],
    [{}, 'Object'],
    [123, 'Number']
])

variableKeys.forEach((vl, ch) => {
    console.log(vl, ch)
})

console.log(variableKeys.has(123))
variableKeys.delete(123)
console.log(variableKeys.has(123))
console.log(variableKeys.size)

variableKeys.set(123, "a")
variableKeys.set(123, "b")
variableKeys.set(456, "b")
console.log(variableKeys)