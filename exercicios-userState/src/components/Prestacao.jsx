//todo: Não tem garçom de cara feia: Uma empresa abriu uma linha de crédito para os funcionários. O valor da prestação não pode ultrapassar 30% do salário. Faça um programa que receba o salário, o valor do empréstimo e o número de prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores informados pode ser zero ou negativo.

import { useState } from "react"

let limitePrestacao = 30
let salarioUsuario
let valorEmprestimo
let qtdPrestacoes
let valorParcelado
let porcentagemPrestacao

function Prestacao() {

    function emprestimar(){

        salarioUsuario = Number(prompt('Digite o salário em reais do usuário'))
        valorEmprestimo = Number(prompt('Digite o valor do empréstimo em reais'))
        qtdPrestacoes= Number(prompt('Digite quantas prestações você quer fazer?'))

        valorParcelado = valorEmprestimo / qtdPrestacoes
        porcentagemPrestacao = (valorParcelado * 100) / salarioUsuario

        console.log(porcentagemPrestacao)

        switch (true){

            case salarioUsuario <= 0:
            case valorEmprestimo <= 0:
            case qtdPrestacoes <= 0:
                setResultado('Número inválido! tente novamente sem usar os zeros')
                break
            case (porcentagemPrestacao > limitePrestacao):

                setResultado('Você não pode fazer um empréstimo, limite excedido! tente parcelar em mais vezes ou com um valor menor')
                break

            case (porcentagemPrestacao <= limitePrestacao):

                setResultado('Você pode fazer um empréstimo!')
                break
            default:
                setResultado ('ERROR')
    
            
    
            


        }

    }

    const [resultado, setResultado] = useState()
  return (
    <div>
      <h2>Exercício número sete: O valor da prestação não pode ultrapassar 30% do salário. Faça um programa que receba o salário, o valor do empréstimo e o número de prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores informados pode ser zero ou negativo</h2>
      <button onClick={emprestimar}>Emprestimar</button>
      <h3>{resultado}</h3>
    </div>
  )
}

export default Prestacao
