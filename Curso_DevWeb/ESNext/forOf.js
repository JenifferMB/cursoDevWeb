for(let letter of "Atmosphere"){
    console.log(letter)
}

const ecma = ["Map", "Set", "Promise"]

for(let i of ecma){
    console.log(i)
}

for(let j of ecma){
    console.log(j)
}

const map = new Map([
    ["Map", {passed: true}],
    ["Set", {passed: true}],
    ["Promise", {passed: false}]
])

for(let passed of map){
    console.log(passed)
}

for(let key of map.keys()){
    console.log(key)
}

for(let value of map.values()){
    console.log(value)
}

for(let [ch, vl] of map.entries()){
    console.log(ch, vl)
}

const strings = new Set(["a", "b", "c", "a"])
for(let letter of strings){
    console.log(letter)
}