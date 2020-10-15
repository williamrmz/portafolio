/* NAVEGADOR */
function navegador() {
    document.getElementById("toggle").addEventListener("click", function () {
        const item = document.getElementsByClassName("item");
        for (var i = 0; i < item.length; i++) {
            if (item[i].classList.contains("active")) {
                item[i].classList.remove("active");
            } else {
                item[i].classList.add("active");
            }
        }
    });
}

/* JSON PROYECTOS */
let data = [
    {
        titulo: "Ganimed Web",
        tipo: "web",
        imgportada: "img/gan-web/Listado.png",
        description: `Una SPA (Single Page Application) desarrollada para consultorio pediatra de la clínica Ganimed para la detección de anemia en pacientes de 0 a "web"2 años
			a partir de los datos obtenidos en su examinación. Para los niños detectados con anemia se le considera un segundo exámen de diagnóstico luego de dos meses 
			para evaluar mejorías.
			Las tecnologías usadas son Angular para el frontend, NodeJS con Express para el backend con API Rest, PostgreSQL para
			el almacenamiento de los datos.`,
        imggallery: ["img/gan-web/Sesion.png", "img/gan-web/Listado.png", "img/gan-web/Registro.png"],
        tags: ["Angular", "TypeScript", "PostgreSQL", "NodeJS", "Express", "API Rest"],
    },
    {
        titulo: "Ganimed App",
        tipo: "app",
        imgportada: "img/gan-app/Listado.jpg",
        description:
            "Una app móvil desarrollada para consultorio pediatra de la clínica Ganimed para la detección de anemia en pacientes de 0 a 12 años",
        imggallery: ["img/gan-app/Menu.jpg", "img/gan-app/Listado.jpg", "img/gan-app/Registro.jpg"],
        tags: ["Java", "PHP", "Web Services", "PostgreSQL", "API Rest"],
    },
    {
        titulo: "Samuel Johnson",
        tipo: "web",
        imgportada: "img/sj/Inicio.png",
        description: "Página web desarrollada para la academia de inglés Samuel Johnson",
        imggallery: ["img/sj/Inicio.png", "img/sj/Nosotros.png", "img/sj/Comunidad.png"],
        tags: ["JavaScript", "CSS", "Bootstrap", "jQuery"],
    }
];

/* CARDS */
function cards() {
    document.getElementById("grid").innerHTML = `
    ${data
        .map(
            (project, index) => `<div class="projects_card ">	
            <div class="lds-roller">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>					
                                <figure class="figure">
                                    <img ${
                                        project.tipo == "web"
                                            ? ` class="cargando imgweb"`
                                            : `class="cargando imgapp"`
                                    }
                                    src="${project.imgportada}">
                                    <div class="capa">
                                        <h3>${project.titulo}</h3>
                                        <a href="#" class="ver" id="${index}" >Ver</a>
                                        <ul>${project.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
                                    </div>
                                </figure>
                            </div>`
        )
        .join("")}`;
}

// Loader en imagenes
function loader() {
    //ocultar figures
    figuras = document.getElementsByClassName("figure");
    Array.from(figuras).forEach((figure) => {
        figure.style.display = "none";
    });

    //extraer todos los img para poder asignar el evento load
    imagenes = document.getElementsByClassName("cargando");
    Array.from(imagenes).forEach((imagen) => {
        imagen.addEventListener("load", () => {
            //ocultar el loader una vez carguen
            const loader = document.getElementsByClassName("lds-roller");
            Array.from(loader).forEach((load) => {
                load.style.display = "none";
            });
            //mostrar los figure una vez carguen
            Array.from(figuras).forEach((figura) => {
                figura.style.display = "revert";
            });
        });
    });
}

/* MODAL */
function modal() {
    const abrir = document.getElementsByClassName("ver");
    const cerrar = document.getElementsByClassName("close");
    const modal = document.getElementsByClassName("modal");
    const modalC = document.getElementsByClassName("modal-container");
    const imgs = document.getElementsByClassName("img-galeria")

    //evento click para cada card y cargar datos con su index en json
    Array.from(abrir).forEach((element, index) => {
        element.addEventListener("click", function (e) {
            e.preventDefault();
            modalC[0].style.opacity = "1";
            modalC[0].style.visibility = "visible";
            modal[0].classList.toggle("modal-close");
            document.querySelector(".modal-titulo").textContent = `${data[index].titulo}`;
            document.querySelector(".modal-descripcion").textContent = `${data[index].description}`;
            
            //se selecciona el index específico del objeto dentro del json
            data[index].imggallery.map(
                (ruta, idx) => (document.getElementById(`img-${idx}`).src = `${ruta}`)
            );

            //recorrido a cantidad de imagenes para agregar si es imagen app o web
            Array.from(imgs).forEach((element, idx) => {
                document.getElementById(`img-${idx}`).classList.remove("web", "app")
                document.getElementById(`img-${idx}`).classList.add(`${data[index].tipo}`)
            });
            
            glide.update();
            glide.go("=0");
        });
    });

    //evento al botón close
    cerrar[0].addEventListener("click", function (e) {
        modal[0].classList.toggle("modal-close");
        setTimeout(() => {
            modalC[0].style.opacity = "0";
            modalC[0].style.visibility = "hidden";
        }, 500);
    });

    //evento afuera del modal
    window.addEventListener("click", function (e) {
        if (e.target == modalC[0]) {
            modal[0].classList.toggle("modal-close");
            setTimeout(() => {
                modalC[0].style.opacity = "0";
                modalC[0].style.visibility = "hidden";
            }, 500);
        }
    });
}

function funciones() {
    navegador();
    cards();
    loader();
    modal();
}

funciones();

//librería glide
var glide = new Glide(".glide", {
    startAt: "0",
    focusAt: "0",
    autoplay: 3500,
    hoverpause: true,
    keyboard: true,
    animationDuration: 1500,
});

glide.mount();


