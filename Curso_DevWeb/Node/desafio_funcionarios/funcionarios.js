const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const woman = f => f.genero === "F"
const china = f => f.pais === "China"
const lowerSalary = (func, funcActual) => {
    return func.salario < funcActual.salario ? func : funcActual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const result = funcionarios.filter(woman).filter(china).reduce(lowerSalary)
    console.log(result)
})