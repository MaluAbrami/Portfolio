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


//SCRIPT PARA TEXTO INTRODUTÓRIO ESTILO MAQUINA DE ESCREVER
document.addEventListener("DOMContentLoaded", () => {
    const text = "Seja muito bem-vindo(a) ao meu Portfólio!"; // Altere o texto conforme necessário
    const speed = 50; // Velocidade de digitação em milissegundos

    function typeWriter(text, elementId, speed) {
        const element = document.getElementById(elementId);
        let index = 0;

        function type() {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    typeWriter(text, "typewriter", speed);
});

//SCRIPT PARA ANIMAR ROLAGEM DAS SEÇÕES DA PÁGINA
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".full-page");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible"); // Remove animação ao sair
                }
            });
        },
        {
            threshold: 0.4, // Ativa quando 40% da seção está visível
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});
