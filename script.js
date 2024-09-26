// Captura os elementos HTML pelos seus IDs e os armazena em variáveis
let num = document.getElementById("fnum"); // Campo de input para inserir números
let lista = document.getElementById("flista"); // Select para exibir a lista de números adicionados
let res = document.getElementById("res"); // Div onde será exibido o resultado final
let valores = []; // Array que vai armazenar os números adicionados

// Função que verifica se o número está entre 1 e 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true; // Retorna verdadeiro se o número está dentro da faixa permitida
    } else {
        return false; // Retorna falso se o número não está na faixa
    }
}

// Função que verifica se o número já foi adicionado à lista (array)
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // Usa indexOf para verificar se o número já está no array
        return true; // Retorna verdadeiro se o número já estiver na lista
    } else {
        return false; // Retorna falso se o número ainda não estiver na lista
    }
}

// Função que adiciona o número à lista se for válido e não estiver duplicado
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // Verifica se o número é válido e não está na lista
        valores.push(Number(num.value)); // Adiciona o número ao array 'valores'
        
        // Cria um elemento 'option' para adicionar à lista (select)
        let item = document.createElement(`option`);
        item.text = `Valor ${num.value} adicionado`; // Texto que será exibido na lista
        lista.appendChild(item); // Adiciona a nova 'option' ao 'select'
        
        res.innerHTML = ``; // Limpa a área de resultados caso já tenha algum texto anterior
    } else {
        window.alert(`Valor inválido ou já encontrado na lista.`); // Exibe um alerta se o valor for inválido ou duplicado
    }
    
    num.value = ``; // Limpa o campo de input para permitir a inserção de outro número
    num.focus(); // Coloca o foco de volta no campo de input para facilitar a digitação
}

// Função que calcula e exibe os resultados após a finalização da adição dos números
function finalizar() {
    if (valores.length == 0) { // Verifica se a lista de valores está vazia
        window.alert(`Adicione um valor antes de finalizar!`); // Alerta para adicionar números antes de finalizar
    } else {
        let tot = valores.length; // Total de números adicionados
        let maior = valores[0]; // Inicializa o maior valor como o primeiro número da lista
        let menor = valores[0]; // Inicializa o menor valor como o primeiro número da lista
        let soma = 0; // Variável para armazenar a soma dos valores
        let media = 0; // Variável para armazenar a média dos valores
        
        // Loop que percorre todos os números no array 'valores'
        for (let pos in valores) {
            soma += valores[pos]; // Soma todos os números
            
            if (valores[pos] > maior) // Verifica se o número atual é maior que o maior registrado
                maior = valores[pos]; // Atualiza o maior valor
            
            if (valores[pos] < menor) // Verifica se o número atual é menor que o menor registrado
                menor = valores[pos]; // Atualiza o menor valor
        }
        
        media = soma / tot; // Calcula a média dos números
        
        // Exibe os resultados na div 'res'
        res.innerHTML = ``; // Limpa o conteúdo anterior da área de resultado
        res.innerHTML += `<p>Ao todo temos ${tot} cadastrados.</p>`; // Exibe o total de números adicionados
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`; // Exibe o menor número
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`; // Exibe o maior número
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`; // Exibe a soma dos números
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`; // Exibe a média dos números
    }
}
