/* O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function sale(code, qtd) {
    switch (code) {
        case 100: return `R$${qtd*3}`
        case 200: return `R$${qtd*4}`
        case 300: return `R$${qtd*5.5}`
        case 400: return `R$${qtd*7.5}`
        case 500: return `R$${qtd*3.5}`
        case 600: return `R$${qtd*2.8}`
        default: return "invalid code"
    }
}

for(let i = 0; i <= 600; i = i +100){
    console.log(`sale code = ${i} = ${sale(i,2)}`)
}