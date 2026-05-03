
// 1.1 Inverter uma string
function inverterString(texto) {
    return texto.split("").reverse().join("");
}

// 1.2 Contar vogais
function contarVogais(texto) {
    const vogais = "aeiou";
    let contador = 0;
    for (let letra of texto.toLowerCase()) {
        if (vogais.includes(letra)) contador++;
    }
    return contador;
}

// 1.3 Verificar palíndromo
function ehPalindromo(texto) {
    const limpo = texto.toLowerCase();
    return limpo === limpo.split("").reverse().join("");
}

// 1.4 Capitalizar palavras
function capitalizarPalavras(frase) {
    return frase
        .split(" ")
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(" ");
}

// 2.1 Ficha do aluno
function criarAluno(nome, idade, curso) {
    const aluno = { nome, idade, curso };
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Curso: ${aluno.curso}`);
    return aluno;
}

// 2.2 Calculadora de IMC
function calcularIMC(nome, peso, altura) {
    const imc = parseFloat((peso / (altura * altura)).toFixed(2));
    let classificacao;

    if (imc < 18.5)       classificacao = "Abaixo do peso";
    else if (imc < 25)    classificacao = "Peso normal";
    else if (imc < 30)    classificacao = "Sobrepeso";
    else                  classificacao = "Obesidade";

    console.log(`Nome: ${nome}`);
    console.log(`IMC: ${imc}`);
    console.log(`Classificação: ${classificacao}`);
    return { nome, imc, classificacao };
}

// 2.3 Lista de contatos
function buscarContato(contatos, nome) {
    return contatos.find(c => c.nome === nome) || null;
}

// 3.1 Dia da semana
function diaDaSemana(numero) {
    switch (numero) {
        case 1: return "Domingo";
        case 2: return "Segunda-feira";
        case 3: return "Terça-feira";
        case 4: return "Quarta-feira";
        case 5: return "Quinta-feira";
        case 6: return "Sexta-feira";
        case 7: return "Sábado";
        default: return "Dia inválido";
    }
}

// 3.2 Calculadora com switch
function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/":
            if (num2 === 0) return "Erro: divisão por zero";
            return num1 / num2;
        default: return "Operação inválida";
    }
}

// 3.3 Verificar aprovação
function verificarAprovacao(nota) {
    return nota >= 60 ? "Aprovado" : "Reprovado";
}

// 4.1 Conversor de moeda
const realParaDolar = (reais, cotacao) =>
    parseFloat((reais / cotacao).toFixed(2));

// 4.2 Mensagem personalizada
const gerarMensagem = (nome, idade, cidade) =>
    `Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;

// 5.1 Dobrar valores com map
function dobrarValores(numeros) {
    return numeros.map(n => n * 2);
}

// 5.2 Filtrar maiores de idade
function filtrarMaiores(pessoas) {
    return pessoas.filter(p => p.idade >= 18);
}

// 5.3 Buscar produto por ID
function buscarProduto(produtos, id) {
    return produtos.find(p => p.id === id);
}

// 6.1 Validar senha
function validarSenha(senha) {
    const erros = [];

    if (senha.length < 8)          erros.push("Mínimo 8 caracteres");
    if (!/[A-Z]/.test(senha))      erros.push("Falta letra maiúscula");
    if (!/[a-z]/.test(senha))      erros.push("Falta letra minúscula");
    if (!/[0-9]/.test(senha))      erros.push("Falta número");

    return { valida: erros.length === 0, erros };
}

// 6.2 Cifra de César
function cifrarCesar(texto, deslocamento) {
    return texto.split("").map(char => {
        const codigo = char.charCodeAt(0);
        if (codigo >= 97 && codigo <= 122) {
            return String.fromCharCode(((codigo - 97 + deslocamento) % 26) + 97);
        }
        return char;
    }).join("");
}

// 6.3 Ordenar alunos por nota
function ordenarPorNota(alunos) {
    return [...alunos].sort((a, b) => b.nota - a.nota);
}

// 6.4 Remover duplicados
function removerDuplicados(array) {
    return [...new Set(array)];
}

// 6.5 Relatório da turma
function relatorioTurma(alunos) {
    const soma = alunos.reduce((acc, a) => acc + a.nota, 0);
    const media = parseFloat((soma / alunos.length).toFixed(1));

    const melhorAluno = alunos.reduce((melhor, a) => a.nota > melhor.nota ? a : melhor);
    const piorAluno   = alunos.reduce((pior,   a) => a.nota < pior.nota   ? a : pior);
    const aprovados   = alunos.filter(a => a.nota >= 60).length;

    console.log(`Média da turma: ${media}`);
    console.log(`Melhor aluno: ${melhorAluno.nome} (${melhorAluno.nota})`);
    console.log(`Pior aluno: ${piorAluno.nome} (${piorAluno.nota})`);
    console.log(`Aprovados: ${aprovados}`);

    return { media, melhorAluno, piorAluno, aprovados };
}