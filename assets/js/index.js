$(function () {
	// Crea un alert de bootstrap
	const alertContainer = document.getElementById('alertContainer');
	const appendAlert = (msg, type) => {
		const wrapper = document.createElement('div');
		wrapper.innerHTML = `
		<div class="alert alert-${type} alert-dismissible fade show" role="alert">
			<strong>Ups!</strong> ${msg}
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
		`;
		alertContainer.append(wrapper);
	};

	let checkbox = $('input:checkbox');
	let setTareas = new Set();
	let mapTareas = new Map();

	checkbox.each(function () {
		$(this).on('change', () => {
			if (this.checked) {
				if ($(this).siblings().val() !== '') {
					// se agrega elemento al set
					setTareas.add($(this).siblings().val());
					let checkNum = $(this).val();
					// construir objeto clave-valor con Map recorriendo el Set
					setTareas.forEach((tarea) => {
						mapTareas.set(checkNum, tarea);
					});
					console.log(mapTareas);
					$(this).siblings().addClass('text-decoration-line-through');
				} else {
					appendAlert('Debes rellenar el campo con alguna tarea', 'warning');
					$(this).prop('checked', false);
				}
			} else {
				console.log('unchecked');
				$(this).siblings().removeClass('text-decoration-line-through');
			}
		});
	});
});
