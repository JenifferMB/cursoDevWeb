const n = [1,2,3,4,5,6,7,8,9,10]

for (i in n){
    if(i == 5) break

    console.log(`${i} = ${n[i]}`)
}

console.log("continue: ")

for (i in n){
    if(i == 5) continue

    console.log(`${i} = ${n[i]}`)
}

