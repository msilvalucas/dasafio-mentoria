# Jogo de Pontos com Dados do GitHub

Este projeto consiste em um pequeno jogo que compara dois usuários do GitHub, somando pontos a partir de informações de seus perfis — como número de repositórios públicos, seguidores e gists públicos — e exibe o vencedor na tela.

---

## Tabela de Conteúdos
1. [Visão Geral](#visão-geral)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Como Executar](#como-executar)
   - [Pré-requisitos](#pré-requisitos)
   - [Passo a Passo](#passo-a-passo)
4. [Como Funciona](#como-funciona)

---

## Visão Geral

O objetivo deste projeto é buscar informações de dois usuários do GitHub (através da [API do GitHub](https://api.github.com)) e realizar uma simples "competição" entre eles. 

Cada usuário acumula pontos com base em:
- **public_gists**: multiplicado por 5  
- **public_repos**: multiplicado por 10  
- **followers**: multiplicado por 20  

Quem obtiver a maior pontuação total, ganha o jogo.

---

## Tecnologias Utilizadas

- **HTML** para a estrutura da página  
- **CSS** (opcional, caso queira estilizar a página)  
- **JavaScript** para consumo de API (usando `fetch`) e manipulação do DOM  
- **API do GitHub** para obter dados dos usuários  

---

## Como Executar

### Pré-requisitos

- Um navegador web atualizado (Chrome, Firefox, Edge, etc.)
- Acesso à internet para consumir a API do GitHub

### Passo a Passo

1. **Faça o download ou clone** este repositório.
2. Abra o arquivo **`index.html`** (ou equivalente) em seu navegador.
3. Preencha os campos com **dois nomes de usuários** do GitHub.
4. Clique em **"Jogar"** (ou o botão que for) para iniciar a busca e comparar os pontos.
5. Aguarde o resultado e veja quem ganhou ou se houve empate.

---

## Como Funciona

1. Ao preencher o formulário e clicar no botão, é feito um evento `submit` que previne o recarregamento da página (uso de `e.preventDefault()`).
2. Verifica-se se os campos foram preenchidos. Se não, é exibido um alerta pedindo para preencher.
3. Se tudo estiver ok, executa-se o `Promise.all` para buscar **simultaneamente** as informações dos dois usuários:
   ```js
   Promise.all([
     fetch(`${URL}/${userOne.value}`).then((response) => response.json()),
     fetch(`${URL}/${userTwo.value}`).then((response) => response.json()),
   ])
   .then(([dataUserOne, dataUserTwo]) => { ... })
