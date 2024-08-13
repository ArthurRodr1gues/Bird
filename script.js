// Definindo a velocidade de movimento dos canos e a gravidade
let velocidade_movimento = 3, gravidade = 0.5;

// Obtendo o elemento do pássaro e a imagem associada a ele
let passaro = document.querySelector('.bird');
let imagem = document.getElementById('bird-1');

// Carregando os efeitos sonoros
let som_ponto = new Audio('sounds effect/point.mp3');
let som_morte = new Audio('sounds effect/die.mp3');

// Obtendo as propriedades do elemento do pássaro para verificar sua posição
let propriedades_passaro = passaro.getBoundingClientRect();

// Obtendo as propriedades do fundo do jogo para verificar limites
let fundo = document.querySelector('.background').getBoundingClientRect();

// Obtendo os elementos de pontuação e mensagem
let valor_pontuacao = document.querySelector('.score_val');
let mensagem = document.querySelector('.message');
let titulo_pontuacao = document.querySelector('.score_title');

// Inicializando o estado do jogo e ocultando a imagem do pássaro
let estado_jogo = 'Início';
imagem.style.display = 'none';
mensagem.classList.add('messageStyle');

// Adicionando um evento de tecla para iniciar o jogo quando Enter é pressionado
document.addEventListener('keydown', (e) => {
    
    // Verifica se a tecla pressionada é Enter e se o jogo não está em andamento
    if(e.key == 'Enter' && estado_jogo != 'Jogar'){
        // Remove todos os canos existentes
        document.querySelectorAll('.pipe_sprite').forEach((e) => {
            e.remove();
        });
        // Exibe a imagem do pássaro e redefine sua posição
        imagem.style.display = 'block';
        passaro.style.top = '40vh';
        // Altera o estado do jogo para 'Jogar' e atualiza a pontuação
        estado_jogo = 'Jogar';
        mensagem.innerHTML = '';
        titulo_pontuacao.innerHTML = 'Pontuação : ';
        valor_pontuacao.innerHTML = '0';
        mensagem.classList.remove('messageStyle');
        // Inicia o loop principal do jogo
        jogar();
    }
});

// Função principal do jogo
function jogar(){
    // Função para mover os canos
    function mover(){
        // Verifica se o jogo está em andamento
        if(estado_jogo != 'Jogar') return;

        // Obtendo todos os canos
        let canos = document.querySelectorAll('.pipe_sprite');
        canos.forEach((elemento) => {
            // Obtendo as propriedades do cano e do pássaro
            let propriedades_cano = elemento.getBoundingClientRect();
            propriedades_passaro = passaro.getBoundingClientRect();

            // Verifica se o cano saiu da tela
            if(propriedades_cano.right <= 0){
                elemento.remove(); // Remove o cano da tela
            }else{
                // Verifica colisão entre o pássaro e o cano
                if(propriedades_passaro.left < propriedades_cano.left + propriedades_cano.width && propriedades_passaro.left + propriedades_passaro.width > propriedades_cano.left && propriedades_passaro.top < propriedades_cano.top + propriedades_cano.height && propriedades_passaro.top + propriedades_passaro.height > propriedades_cano.top){
                    // Se houver colisão, o jogo termina
                    estado_jogo = 'Fim';
                    mensagem.innerHTML = 'Game Over'.fontcolor('red') + '<br>Pressione Enter Para Reiniciar';
                    mensagem.classList.add('messageStyle');
                    imagem.style.display = 'none';
                    som_morte.play(); // Toca o som de morte
                    return;
                }else{
                    // Se o cano passou pelo pássaro, aumenta a pontuação
                    if(propriedades_cano.right < propriedades_passaro.left && propriedades_cano.right + velocidade_movimento >= propriedades_passaro.left && elemento.increase_score == '1'){
                        valor_pontuacao.innerHTML =+ valor_pontuacao.innerHTML + 1;
                        som_ponto.play(); // Toca o som de ponto
                    }
                    // Move o cano para a esquerda
                    elemento.style.left = propriedades_cano.left - velocidade_movimento + 'px';
                }
            }
        });
        // Solicita uma nova animação para continuar o movimento
        requestAnimationFrame(mover);
    }
    requestAnimationFrame(mover);

    // Inicializa a velocidade vertical do pássaro
    let velocidade_vertical_passaro = 0;
    function aplicar_gravidade(){
        // Verifica se o jogo está em andamento
        if(estado_jogo != 'Jogar') return;
        // Aplica a gravidade ao pássaro
        velocidade_vertical_passaro = velocidade_vertical_passaro + gravidade;
        
        // Adiciona eventos de tecla para controle do pássaro
        document.addEventListener('keydown', (e) => {
            if(e.key == 'ArrowUp' || e.key == ' '){
                imagem.src = 'images/Bird-2.png'; // Muda a imagem do pássaro ao pular
                velocidade_vertical_passaro = -7.6; // Define a velocidade do pulo
            }
        });

        document.addEventListener('keyup', (e) => {
            if(e.key == 'ArrowUp' || e.key == ' '){
                imagem.src = 'images/Bird.png'; // Restaura a imagem do pássaro ao parar de pular
            }
        });

        // Verifica se o pássaro colidiu com o topo ou com a parte inferior do fundo
        if(propriedades_passaro.top <= 0 || propriedades_passaro.bottom >= fundo.bottom){
            estado_jogo = 'Fim';
            mensagem.style.left = '28vw';
            window.location.reload(); // Reinicia a página ao fim do jogo
            mensagem.classList.remove('messageStyle');
            return;
        }
        // Atualiza a posição vertical do pássaro
        passaro.style.top = propriedades_passaro.top + velocidade_vertical_passaro + 'px';
        propriedades_passaro = passaro.getBoundingClientRect();
        // Solicita uma nova animação para continuar aplicando a gravidade
        requestAnimationFrame(aplicar_gravidade);
    }
    requestAnimationFrame(aplicar_gravidade);

    // Inicializa a separação entre os canos
    let separacao_cano = 0;

    // Define o espaço entre os canos
    let espaco_cano = 35;

    function criar_cano(){
        // Verifica se o jogo está em andamento
        if(estado_jogo != 'Jogar') return;

        // Cria novos canos a cada intervalo
        if(separacao_cano > 115){
            separacao_cano = 0;

            // Gera uma posição aleatória para o cano
            let posicao_cano = Math.floor(Math.random() * 43) + 8;
            
            // Cria o cano inferior
            let cano_inferior = document.createElement('div');
            cano_inferior.className = 'pipe_sprite';
            cano_inferior.style.top = posicao_cano - 70 + 'vh';
            cano_inferior.style.left = '100vw';

            document.body.appendChild(cano_inferior);
            
            // Cria o cano superior
            let cano_superior = document.createElement('div');
            cano_superior.className = 'pipe_sprite';
            cano_superior.style.top = posicao_cano + espaco_cano + 'vh';
            cano_superior.style.left = '100vw';
            cano_superior.increase_score = '1';

            document.body.appendChild(cano_superior);
        }
        separacao_cano++;
        // Solicita uma nova animação para continuar criando canos
        requestAnimationFrame(criar_cano);
    }
    requestAnimationFrame(criar_cano);
}
