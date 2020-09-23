/* NAVEGADOR */
document.getElementById('toggle').addEventListener('click', function () {
	const item = document.getElementsByClassName('item');
	for (var i = 0; i < item.length; i++) {
		if (item[i].classList.contains('active')) {
			item[i].classList.remove('active');
		} else {
			item[i].classList.add('active');
		}
	}
});

/* JSON PROYECTOS */
let data = [
	{
		titulo: 'Ganimed Web',
		tipo: 1,
		imgportada: './img/gan-web/Listado.png',
		description:
			'Una SPA (Single Page Application) desarrollada para consultorio pediatra de la clínica Ganimed para la detección de anemia en pacientes de 0 a 12 años',
		imggallery: {
			1: './img/gan-web/Sesion.png',
			2: './img/gan-web/Listado.png',
			3: './img/gan-web/Registro.png',
		},
		tags: ['Angular', 'TypeScript', 'PostgreSQL', 'NodeJS', 'Express', 'API Rest'],
	},
	{
		titulo: 'Ganimed App',
		tipo: 2,
		imgportada: './img/gan-app/Listado.jpg',
		description:
			'Una app móvil desarrollada para consultorio pediatra de la clínica Ganimed para la detección de anemia en pacientes de 0 a 12 años',
		imggallery: {
			1: './img/gan-app/Menu.jpg',
			2: './img/gan-app/Listado.jpg',
			3: './img/gan-app/Registro.jpg',
		},
		tags: ['Java', 'PHP', 'Web Services', 'PostgreSQL', 'API Rest'],
	},
	{
		titulo: 'Samuel Johnson',
		tipo: 1,
		imgportada: './img/sj/Inicio.png',
		description: 'Página web desarrollada para la academia de inglés Samuel Johnson',
		imggallery: {
			1: './img/sj/Inicio.png',
			2: './img/sj/Comunidad.png',
			3: './img/sj/Nosotros.png',
		},
		tags: ['JavaScript', 'CSS', 'Bootstrap', 'jQuery'],
	},
];

/* CARDS */
document.getElementById('grid').innerHTML = `
${data
	.map(
		(project, index) => `<div class="projects_card ">						
							<figure>
								<img ${project.tipo == 1 ? ` class="imgweb"` : `class="imgapp"`}
								src="${project.imgportada}">
								<div class="capa">
									<h3>${project.titulo}</h3>
									<a href="#" class="ver" id="${index}" >Ver</a>
									<ul>${project.tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>
								</div>
							</figure>
						</div>`
	)
	.join('')}`;

/* MODAL */
const abrir = document.getElementsByClassName('ver');
const cerrar = document.getElementsByClassName('close');
const modal = document.getElementsByClassName('modal');
const modalC = document.getElementsByClassName('modal-container');

Array.from(abrir).forEach((element, index) => {
	element.addEventListener('click', function (e) {
		e.preventDefault();
		modalC[0].style.opacity = '1';
		modalC[0].style.visibility = 'visible';
		modal[0].classList.toggle('modal-close');
		document.querySelector('.modal-titulo').textContent = `${data[index].titulo}`;
		document.querySelector('.modal-descripcion').textContent = `${data[index].description}`;
		// document.querySelector('.modal-titulo').textContent = `${data[index].titulo}`;
		// document.querySelector('.modal-titulo').textContent = `${data[index].titulo}`;
	});
});

cerrar[0].addEventListener('click', function (e) {
	modal[0].classList.toggle('modal-close');
	setTimeout(() => {
		modalC[0].style.opacity = '0';
		modalC[0].style.visibility = 'hidden';
	}, 600);
});

window.addEventListener('click', function (e) {
	if (e.target == modalC[0]) {
		modal[0].classList.toggle('modal-close');
		setTimeout(() => {
			modalC[0].style.opacity = '0';
			modalC[0].style.visibility = 'hidden';
		}, 600);
	}
});
