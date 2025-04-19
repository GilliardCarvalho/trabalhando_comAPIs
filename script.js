const divResposta = document.getElementById("resposta")

async function pesquisarCEP() {
    try {


        console.log("EU")
        const CEPstring = document.getElementById("CEP").value
        console.log(CEPstring)

        const resposta = await fetch(`https://viacep.com.br/ws/${CEPstring}/json/`)

        console.log(resposta)

        const dados = await resposta.json()
        console.log(dados)
        const HTML = `
        <div>
        <p> CEP: ${dados.CEP}</p>
        <p> logradouro: ${dados.logradouro}</p>
        <p> complemento: ${dados.complemento}</p>
        <p> unidade: ${dados.unidade}</p>
        <p> bairro: ${dados.bairro}</p>
        <p> localidade: ${dados.localidade}</p>
        <p> uf: ${dados.uf}</p>
        <p> estado: ${dados.estado}</p>
        <p> regiao: ${dados.regiao}</p>
        <p> ibge: ${dados.ibge}</p>
        <p> gia: ${dados.gia}</p>
        <p> ddd: ${dados.ddd}</p>
        <p> siafi: ${dados.siafi}</p>
        </div>
        `
        divResposta.innerHTML = HTML
    } catch (erro) {
        console.log(erro)
        divResposta.innerHTML = "Erro ao buscar dados da API de CEP"
    }
}

const divAnswer = document.getElementById("answer")

async function pesquisarCNPJ() {
    try{

        const CNPJstring = document.getElementById("CNPJ").value
        console.log(CNPJstring)


        const answer = await fetch(`https://open.cnpja.com/office/${CNPJstring}`)

        console.log(answer)

        const dados = await answer.json()
        console.log(dados)
        const HTML = `
        
        <p> CNPJ: ${dados.CNPJ}</p>
        <p> name: ${dados.company.name}</p>
        `
        divAnswer.innerHTML = HTML
    } catch (erro) {
        console.log(erro)
        divAnswer.innerHTML = "Erro ao buscar dados da API de CNPJ"
    }
    
}

async function validarCPF() {
    try{

        const CPFstring = document.getElementById("CPF").value
        console.log(CPFstring)

        

        const CPF = await fetch(`https://scpa-backend.saude.gov.br/public/scpa-usuario/validacao-cpf/${CPFstring}`)

        console.log(CPF)

        const dados = await answer.json()
        console.log(dados)
        const HTML = 
        validarCPF.innerHTML = HTML
    } catch (erro) {
        console.log(erro)
        divAnswer.innerHTML = "Erro ao buscar Validação do CPF"
    }
    
}

    
    

// {
//     "cep": "89252-280",
//     "logradouro": "Rua Padre Alberto Romuald Jakobs",
//     "complemento": "até 235/236",
//     "unidade": "",
//     "bairro": "Nova Brasília",
//     "localidade": "Jaraguá do Sul",
//     "uf": "SC",
//     "estado": "Santa Catarina",
//     "regiao": "Sul",
//     "ibge": "4208906",
//     "gia": "",
//     "ddd": "47",
//     "siafi": "8175"
//   }

//fetch
//URL http://127.0.0.1:5501/index.html
//Protocolo HTTP://
//URL 127.0.0.1:5501
//URL porta de destino 5501
//PATH /index.html
//get



//métodos para requisição
//Padrão RESTFULL
//GET - listar ou buscar registro
//POST - Criar algum registro
//PUT - Alterar algum registro
//DELETE - Deletar um registro


//Códigos de resposta
//100-199 - Códigos informativos
//200-299 - Códigos de sucesso
//300-399 - Códigos de redirecionamento
//400-499 - Erros de regra de negócio
//500-599 - Erro de Servidor 