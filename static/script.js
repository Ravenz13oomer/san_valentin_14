document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("nombre");
    const mensaje = document.getElementById("mensaje");
    const audioFondo = document.getElementById("audio-fondo");

    // Activa la música en la primera página al escribir la primera tecla
    if (input) {
        input.addEventListener("keydown", function () {
            if (audioFondo && audioFondo.paused) {
                audioFondo.play().catch(error => console.log("Reproducción bloqueada por el navegador."));
            }
        });
    }

    // Función para verificar el nombre
    window.verificarNombre = function () {
        const nombreIngresado = input.value.trim().toUpperCase();

        if (nombreIngresado === "ALEXA") {
            window.location.href = "/san_valentin"; // Redirecciona a la página de San Valentín
        } else {
            mensaje.innerHTML = "❓ Pistas: <br> Eres la mujer más hermosa 💖 <br> Tienes un hijo de 8 años que te saca canas verdes 👦";
            mensaje.style.color = "yellow";
        }
    };

    // Lógica de la segunda página
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const musica = document.getElementById("musica");

    // Activar música en la segunda página si está presente
    if (musica) {
        document.addEventListener("click", function () {
            if (musica.paused) {
                musica.play().catch(error => console.log("Reproducción bloqueada por el navegador."));
            }
        });
    }

    // Botón "Sí"
    if (yesBtn) {
        yesBtn.addEventListener("click", function () {
            // Dibujar el corazón con p5.js
            dibujarCorazon();
            alert("💖 ¡Sabía que dirías que sí! 💖");
        });
    }

    // Botón "No" con animación de movimiento
    if (noBtn) {
        noBtn.addEventListener("mouseover", function () {
            noBtn.style.position = "absolute";
            noBtn.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
            noBtn.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
        });

        noBtn.addEventListener("click", function () {
            alert("💔 No puedes decir que no, intenta de nuevo. 💔");
        });
    }

    // Función para dibujar el corazón con p5.js
    function dibujarCorazon() {
        // Eliminar cualquier lienzo existente
        const container = document.getElementById("corazon-container");
        container.innerHTML = "";

        // Crear un nuevo lienzo con p5.js
        new p5(function (p) {
            p.setup = function () {
                const canvas = p.createCanvas(300, 300);
                canvas.parent("corazon-container");  // Asociar el lienzo al contenedor
                p.background(255, 182, 193, 0);  // Fondo transparente
                p.noStroke();  // Sin bordes
                p.fill(255, 105, 180);  // Color rosa
                p.translate(150, 150);  // Centrar el dibujo

                // Dibujar el corazón
                p.beginShape();
                p.vertex(0, -100);
                p.bezierVertex(50, -150, 100, -50, 0, 50);
                p.bezierVertex(-100, -50, -50, -150, 0, -100);
                p.endShape(p.CLOSE);
            };
        });
    }
});