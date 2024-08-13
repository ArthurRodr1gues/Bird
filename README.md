# Explicação Didática de um Jogo Simples (Flappy Bird)

Este documento descreve como um jogo simples, similar ao Flappy Bird, foi criado usando as linguagens HTML, CSS e JavaScript. Vamos entender como cada parte do código funciona.

## 1. Estrutura Básica do HTML

O arquivo HTML (`index.html`) define a estrutura básica da página web. Ele inclui os seguintes elementos principais:

- **`<head>`**: Contém o título da página e os links para o arquivo de estilo CSS (`style.css`) e o arquivo de script JavaScript (`script.js`).
- **`<body>`**: Onde todo o conteúdo visível é colocado. No nosso jogo, temos:
  - **`<div class="background"></div>`**: Um fundo que ocupa toda a tela.
  - **`<img src="images/Bird.png" alt="bird-img" class="bird" id="bird-1">`**: A imagem do pássaro que o jogador controla.
  - **`<div class="message">...</div>`**: Uma mensagem inicial que orienta o jogador a pressionar Enter para começar o jogo.
  - **`<div class="score">...</div>`**: Exibe a pontuação atual do jogador.

## 2. Estilo da Página com CSS

O CSS (`style.css`) define como os elementos HTML devem aparecer na página. Algumas das principais características incluem:

- **`.background`**: Define a imagem de fundo, que cobre toda a tela e permanece fixa enquanto o jogo acontece.
- **`.bird`**: Define o tamanho e a posição do pássaro na tela.
- **`.pipe_sprite`**: Define a aparência e a posição dos canos, que o pássaro deve evitar.
- **`.message` e `.messageStyle`**: Estilizam a mensagem que aparece no começo do jogo e no fim quando o jogador perde.
- **`.score` e `.score_val`**: Controlam a exibição da pontuação na tela.

## 3. Lógica do Jogo com JavaScript

O JavaScript (`script.js`) adiciona a lógica interativa ao jogo. Aqui estão algumas das partes principais:

### 3.1 Variáveis Iniciais

- **`velocidade_movimento` e `gravidade`**: Controlam a velocidade dos canos e a força da gravidade que puxa o pássaro para baixo.
- **`passaro` e `imagem`**: Referenciam o elemento do pássaro e a imagem associada a ele.
- **`som_ponto` e `som_morte`**: Carregam os sons que serão tocados quando o jogador faz um ponto ou perde o jogo.
- **`propriedades_passaro` e `fundo`**: Capturam as dimensões e posição do pássaro e do fundo, para ajudar a detectar colisões.

### 3.2 Controle do Jogo

- **Início do Jogo**: O jogo começa quando o jogador pressiona a tecla Enter. Nesse momento, o pássaro aparece, a pontuação é zerada, e o jogo entra no estado de "Jogar".
- **Movimentação dos Canos**: Os canos começam a se mover da direita para a esquerda. Se o pássaro colidir com um cano, o jogo termina.
- **Aplicação da Gravidade**: A gravidade puxa o pássaro para baixo, mas o jogador pode fazer o pássaro "pular" pressionando a seta para cima ou a barra de espaço.
- **Criação de Novos Canos**: Novos canos são gerados em intervalos regulares, com posições aleatórias, para tornar o jogo desafiador.

### 3.3 Fim do Jogo

Quando o pássaro colide com um cano ou atinge o topo ou a parte inferior da tela, o jogo termina. Uma mensagem de "Game Over" é exibida, e o jogo pode ser reiniciado pressionando Enter.

## 4. Conclusão

Esse jogo simples é um ótimo exemplo de como HTML, CSS e JavaScript podem ser usados juntos para criar experiências interativas na web. O HTML fornece a estrutura, o CSS define o estilo, e o JavaScript adiciona a lógica e interatividade necessárias para que o jogo funcione.
