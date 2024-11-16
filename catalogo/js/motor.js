document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("catalogo.html")) {
        const contenedor1 = document.querySelector(".contenedor1");

        if (contenedor1) {
            const cochesDisponibles = {
                a: ['a1', 'a2'],
                b: ['b1', 'b2'],
                c: ['c1', 'c2'],
                d: ['d1', 'd2'],
                f: [ 'f2'],
                g: ['g1', 'g2'],
                h: ['h1', 'h2'],
                i: ['i1', 'i2'],
                j: ['j1', 'j2'],
                k: ['k1', 'k2'],
                l: ['l1', 'l2'],
                m: ['m1', 'm2'],
                n: ['n1'],
                o: ['o1', 'o2'],
                p: ['p1', 'p2'],
                r: ['r1'],
                t: ['t1',],
                v: ['v1'],
                x: ['x1', 'x2']
            };

            // Deshabilitar y cambiar color de los botones de letras sin coches
            const allLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
            allLetters.forEach(letter => {
                if (!cochesDisponibles[letter]) {
                    const button = document.querySelector(`.letter[data-letter="${letter}"]`);
                    if (button) {
                        button.disabled = true;
                        button.style.backgroundColor = 'grey';
                        button.style.color = 'white';
                    }
                }
            });

            Object.keys(cochesDisponibles).forEach(letter => {
                cochesDisponibles[letter].forEach(coche => {
                    const cocheDiv = document.createElement('div');
                    cocheDiv.className = `coche-${letter} contenedor1-item`;
                    cocheDiv.dataset.letter = letter;

                    const div1 = document.createElement('div');
                    const img1 = document.createElement('img');
                    img1.src = `img/coches/${coche}.png`;
                    img1.alt = '';
                    div1.appendChild(img1);

                    const p1 = document.createElement('p');
                    p1.innerHTML = `
                        Modelo y Marca: Identifica claramente el coche y su fabricante. <br>
                        Precio: Incluye el precio base del coche. <br>
                        Motor y Potencia: Describe el tipo de motor y su potencia en caballos de fuerza.
                    `;
                    div1.appendChild(p1);

                    cocheDiv.appendChild(div1);

                    contenedor1.appendChild(cocheDiv);
                });
            });

            // Inicialmente muestra todos los coches
            document.querySelectorAll(".contenedor1-item").forEach(coche => {
                coche.style.display = "flex";
            });

            // Añade el evento de clic a las letras
            document.querySelectorAll(".letter").forEach(letter => {
                letter.addEventListener("click", function () {
                    const selectedLetter = this.dataset.letter;
                    // Verifica si la letra ya está seleccionada
                    if (this.classList.contains("selected-letter")) {
                        // Si ya está seleccionada, elimina la selección y muestra todos los coches
                        this.classList.remove("selected-letter");
                        document.querySelectorAll(".contenedor1-item").forEach(coche => {
                            coche.style.display = "flex";
                        });
                    } else {
                        // Si no está seleccionada, selecciona la letra y muestra solo los coches correspondientes
                        document.querySelectorAll(".letter").forEach(l => l.classList.remove("selected-letter"));
                        this.classList.add("selected-letter");
                        document.querySelectorAll(".contenedor1-item").forEach(coche => {
                            if (coche.dataset.letter === selectedLetter) {
                                coche.style.display = "flex";
                            } else {
                                coche.style.display = "none";
                            }
                        });
                    }
                });
            });
        }
    }
});
