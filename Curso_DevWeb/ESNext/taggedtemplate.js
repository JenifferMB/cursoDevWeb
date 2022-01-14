function tag(part, ...values){
    console.log(part)
    console.log(values)
    return "String"
}

const band = "Pink Floyd"
const rock = "progressive"
console.log(tag `${band} is ${rock} rock.`)

function real(parts, ...values){
    const result = []
    values.forEach((value, i) => {
        value = isNaN(value) ? value : `R$ ${value.toFixed(2)}`
        result.push(parts[i], value)
    })
    return result.join('')
}

const price = 49.99
const price2 = 10
console.log(real `1x: ${price}, 5x of ${price2}.`)