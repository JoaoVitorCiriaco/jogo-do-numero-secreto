alert('Boas vindas ao jogo do número secreto');
let numeroSecreto= 5;
console.log(numeroSecreto)
let chute 

// enquanto chute não for igual ao n.s. 
while (chute != numeroSecreto) {
    chute = prompt(`escolha um número entre 1 e 10`);
    // se chute for igual ao número secreto 
    if (chute == numeroSecreto) {
        alert(`isso aí! Você Descobriu o número secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`o número secreto é menor que ${chute}`);
        } else {
            alert(`o número secreto é maior que ${chute}`)
        }
    }
}

