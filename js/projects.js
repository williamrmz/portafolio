document.getElementById('toggle').addEventListener('click', function () {
	const item = document.getElementsByClassName('item'); //las clases devuelven arreglo
	for (var i = 0; i < item.length; i++) {
		if (item[i].classList.contains('active')) {
			item[i].classList.remove('active');
		} else {
			item[i].classList.add('active');
		}
	}
});

let data = [
	{
		id: '001',
		titulo: 'Ganimed Web',
		tipo: 1,
		imgportada: '../img/gan-web/Listado.png',
		description:
			'Una SPA (Single Page Application) desarrollada para consultorio pediatra de la clínica Ganimed para la detección de anemia en pacientes de 0 a 12 años',
		imggallery: {
			1: '../img/gan-web/Sesion.png',
			2: '../img/gan-web/Listado.png',
			3: '../img/gan-web/Registro.png',
		},
		tags: ['Angular', 'TypeScript', 'PostgreSQL', 'NodeJS', 'Express', 'API Rest'],
	},
	{
		id: '002',
		titulo: 'Ganimed App',
		tipo: 2,
		imgportada: '../img/gan-app/Listado.jpg',
		description:
			'Una app móvil desarrollada para consultorio pediatra de la clínica Ganimed para la detección de anemia en pacientes de 0 a 12 años',
		imggallery: {
			1: '../img/gan-app/Menu.jpg',
			2: '../img/gan-app/Listado.jpg',
			3: '../img/gan-app/Registro.jpg',
		},
		tags: ['Java', 'PHP', 'Web Services', 'PostgreSQL', 'API Rest'],
	},
	{
		id: '003',
		titulo: 'Samuel Johnson',
		tipo: 1,
		imgportada: '../img/sj/Inicio.png',
		description: 'Página web desarrollada para la academia de inglés Samuel Johnson',
		imggallery: {
			1: '../img/sj/Inicio.png',
			2: '../img/sj/Comunidad.png',
			3: '../img/sj/Nosotros.png',
		},
		tags: ['JavaScript', 'CSS', 'Bootstrap', 'jQuery'],
	},
];

document.getElementById('portafolio').innerHTML = `
<div class="grid">
${data
	.map(
		(project) => `<div class="projects_card id="${project.id}">						
							<figure>
								<img ${project.tipo == 1 ? ` class="imgweb"` : `class="imgapp"`}
								src="${project.imgportada}">
								<div class="capa">
									<h3>${project.titulo}</h3>
									<button class="ver">Ver</button>
									<ul>${project.tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>
								</div>
							</figure>
						</div>`
	)
	.join('')}
</div>`;

// document.getElementById('toggle').addEventListener('click', function () {
// 	const item = document.getElementsByClassName('item'); //las clases devuelven arreglo
// 	for (var i = 0; i < item.length; i++) {
// 		if (item[i].classList.contains('active')) {
// 			item[i].classList.remove('active');
// 		} else {
// 			item[i].classList.add('active');
// 		}
// 	}
// });
