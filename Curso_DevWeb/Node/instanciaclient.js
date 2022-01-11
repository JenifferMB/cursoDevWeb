const contA = require('./instanciaUnica')
const contB = require('./instanciaUnica')
const contC = require('./instanciaNova')()
const contD = require('./instanciaNova')()

contA.inc()
contB.inc()
console.log(contA.value, contB.value)

contC.inc()
contC.inc()
console.log(contC.value, contD.value)