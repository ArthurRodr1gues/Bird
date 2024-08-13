# Resumo do Funcionamento do Código JavaScript

## 1. Inicialização do Jogo
O jogo começa definindo algumas variáveis essenciais, como a velocidade de movimento dos canos e a gravidade que afeta o pássaro:

```javascript
let velocidade_movimento = 3, gravidade = 0.5;
```

Também são selecionados elementos do DOM, como o pássaro e a imagem associada a ele, e sons são carregados para efeitos de jogo:

```javascript
let passaro = document.querySelector('.bird');
let imagem = document.getElementById('bird-1');
let som_ponto = new Audio('sounds effect/point.mp3');
let som_morte = new Audio('sounds effect/die.mp3');
```

## 2. Configuração Inicial
O estado inicial do jogo é configurado para 'Início', e a imagem do pássaro é escondida até que o jogo comece:

```javascript
let estado_jogo = 'Início';
imagem.style.display = 'none';
```

## 3. Iniciando o Jogo
Quando o usuário pressiona a tecla "Enter", o jogo começa. Isso é feito verificando o evento de pressionar uma tecla (keydown) e iniciando a função jogar() se a tecla for "Enter":

```javascript
document.addEventListener('keydown', (e) => {
    if(e.key == 'Enter' && estado_jogo != 'Jogar'){
        // Inicia o jogo
        jogar();
    }
});
```

## 4. Função Principal do Jogo: jogar()
A função jogar() controla a mecânica do jogo, incluindo o movimento dos canos, a aplicação da gravidade ao pássaro, e a criação de novos canos.

### a. Movimentando os Canos
Dentro da função jogar(), a subfunção mover() é responsável por mover os canos e verificar colisões com o pássaro. Se houver colisão, o jogo termina:

```javascript
function mover(){
    if(estado_jogo != 'Jogar') return;
    // Lógica para mover os canos e verificar colisões
    requestAnimationFrame(mover);
}
```

### b. Aplicando Gravidade
Outra subfunção, aplicar_gravidade(), aplica a gravidade ao pássaro, fazendo-o cair constantemente. Ela também lida com o salto do pássaro quando o usuário pressiona "Seta para cima" ou "Espaço":

```javascript
function aplicar_gravidade(){
    if(estado_jogo != 'Jogar') return;
    // Lógica para aplicar gravidade e controlar o salto do pássaro
    requestAnimationFrame(aplicar_gravidade);
}
```

### c. Criando Canos
A função criar_cano() cria novos canos periodicamente, aumentando a dificuldade do jogo à medida que o jogador avança:

```javascript
function criar_cano(){
    if(estado_jogo != 'Jogar') return;
    // Lógica para criar novos canos
    requestAnimationFrame(criar_cano);
}
```

## 5. Fim do Jogo
Se o pássaro colide com um cano ou atinge o topo ou o fundo do cenário, o jogo termina, e uma mensagem de "Game Over" é exibida:

```javascript
if(propriedades_passaro.top <= 0 || propriedades_passaro.bottom >= fundo.bottom){
    estado_jogo = 'Fim';
    mensagem.innerHTML = 'Game Over'.fontcolor('red') + '<br>Pressione Enter Para Reiniciar';
    window.location.reload();
}
```

## Resumo Final
Este código implementa um jogo simples de "Flappy Bird" onde o pássaro cai devido à gravidade e pode saltar ao pressionar uma tecla. O objetivo é passar pelos canos sem colidir. O jogo é iniciado pressionando "Enter" e termina ao colidir com obstáculos ou atingir limites da tela.
