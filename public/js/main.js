//Funcion para el Menú de dispositivos móviles 
$(function() {
	// var siteSticky = function() {
	// 		$(".js-sticky-header").sticky({topSpacing:0});
	// 	};
	// 	siteSticky();

	var siteMenuClone = function() {
		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});

		setTimeout(function() {
				
	var counter = 0;
	$('.site-mobile-menu .has-children').each(function(){
		var $this = $(this);
		$this.prepend('<span class="arrow-collapse collapsed">');
		$this.find('.arrow-collapse').attr({
		'data-toggle' : 'collapse',
		'data-target' : '#collapseItem' + counter,
		});

		$this.find('> ul').attr({
		'class' : 'collapse',
		'id' : 'collapseItem' + counter,
		});

		counter++;
	});

	}, 1000);

	$('body').on('click', '.arrow-collapse', function(e) {
	var $this = $(this);
	if ( $this.closest('li').find('.collapse').hasClass('show') ) {
		$this.removeClass('active');
	} else {
		$this.addClass('active');
	}
	e.preventDefault();  
		
	});

	$(window).resize(function() {
		var $this = $(this),
			w = $this.width();

		if ( w > 768 ) {
			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
			}
		}
	})

	$('body').on('click', '.js-menu-toggle', function(e) {
		var $this = $(this);
		e.preventDefault();
		if ( $('body').hasClass('offcanvas-menu') ) {
			$('body').removeClass('offcanvas-menu');
			$this.removeClass('active');
		}else {
			$('body').addClass('offcanvas-menu');
			$this.addClass('active');
		}
	}) 

	// click outisde offcanvas
	$(document).mouseup(function(e) {
	var container = $(".site-mobile-menu");
	if (!container.is(e.target) && container.has(e.target).length === 0) {
		if ( $('body').hasClass('offcanvas-menu') ) {
			$('body').removeClass('offcanvas-menu');
		}
	}
	});
	}; 
    siteMenuClone();
});

//Validacion Correo
function validarCorreo() {
	let correo = document.getElementById('correo');
	let mensaje = document.getElementById('mensaje');
	
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let validation = emailRegex.test(correo.value);
	
	if (correo.value === "" || mensaje.value === "") {
		Swal.fire({
			icon: 'info',
			title: 'Oops...',
			text: 'Campos Vacíos',
		})
		return false;
	}else if (!validation) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Correo Inválido',
		})
		return false;
	}else{
		Swal.fire({
			icon: 'success',
			title: 'Correo Enviado'
		})
		return true;
	}
}

//Modo Oscuro Normal
const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () =>{
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');

	//Guadar el modo en localstorage
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true')
	}else{
		localStorage.setItem('dark-mode', 'false')
	}
	document.getElementById('switch').style.display="none";

});

//Modo Oscuro Movil
const btnSwitch2 = document.querySelector('#switch1');
btnSwitch2.addEventListener('click', () =>{
	document.getElementById('switch').style.display="none";
	document.body.classList.toggle('dark');
	btnSwitch2.classList.toggle('active');

	//Guadar el modo en localstorage
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true')
	}else{
		localStorage.setItem('dark-mode', 'false')
	}
});

//Obetener el modo actual
if (localStorage.getItem('dark-mode')=='true') {
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
}else{
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}


//Bloquear Clic derecho
document.addEventListener('contextmenu', event => {
	event.preventDefault(); 
});

//Carga pagina
window.onload=function(){
	var contenedor = document.getElementById('contenedor_carga');
	contenedor.style.visibility='hidden';
	contenedor.style.opacity='0';
}
   