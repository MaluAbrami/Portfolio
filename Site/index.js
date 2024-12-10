// Script para mostrar e esconder o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const button = document.getElementById("rolaParaTopo");

    // Se a rolagem for maior que 300px, mostra o botão
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Função para rolar suavemente para o topo
document.getElementById("rolaParaTopo").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}