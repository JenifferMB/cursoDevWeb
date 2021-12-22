/*Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo) */

let totalscore = []

addscore = (score) => totalscore.push(score)

function compareScore (vector){
    let record = Math.max.apply(null, vector);
    let comparable = vector[1] 
    let lower = 0
    let best = 0

    for(let i = 2; i < totalscore.length; i++){
        if(comparable > totalscore[i])
        lower++
        if(comparable < totalscore[i])
        best++
    }

    return `record: ${record}, comparable: ${comparable}, lowerScore: ${lower}, bestScore: ${best}`
}

addscore(4)
addscore(8)
addscore(4)
addscore(5)
addscore(9)
addscore(10)
addscore(4)
console.log("total score: " +totalscore)
console.log(compareScore(totalscore))
