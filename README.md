# Analisador de Números

Este projeto é uma aplicação simples desenvolvida em **HTML**, **CSS** e **JavaScript** com instruções do curso de **JS** do **Curso em Vídeo**, que permite o usuário inserir números, validar se estão dentro de uma faixa específica (1 a 100) e, ao final, calcular estatísticas básicas, como o número total de valores, maior valor, menor valor, soma e média dos números inseridos.

## Funcionalidades

- **Adicionar números**: O usuário pode adicionar números entre 1 e 100.
- **Validação de duplicados**: A aplicação verifica se o número já foi inserido na lista.
- **Resultados Estatísticos**: Ao finalizar, a aplicação exibe:
  - O total de números cadastrados.
  - O maior número inserido.
  - O menor número inserido.
  - A soma de todos os números.
  - A média dos números cadastrados.

## Estrutura do Projeto

O projeto consiste em três arquivos principais:

1. **`index.html`**: Estrutura base do projeto e elementos HTML.
2. **`style.css`**: Estilização básica da interface.
3. **`script.js`**: Lógica JavaScript para adicionar números, validação e exibição de resultados.

### index.html

A página HTML contém um campo de entrada para números, um botão para adicionar esses números à lista e um botão de "Finalizar" para calcular e exibir os resultados. Os resultados são mostrados dinamicamente em uma `div`.

### script.js

Este arquivo contém três funções principais:

- **isNumero()**: Verifica se o número está entre 1 e 100.
- **inLista()**: Verifica se o número já foi inserido na lista.
- **adicionar()**: Valida e adiciona o número à lista, caso ele seja válido e não duplicado.
- **finalizar()**: Calcula o total, maior, menor, soma e média dos números e exibe os resultados.

### Comentários detalhados no código

O código JavaScript está amplamente comentado para facilitar o entendimento de sua lógica e ajudar a pessoas que, como eu, estão estudando e aprendendo JS.
