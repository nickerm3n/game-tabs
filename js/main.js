'use strict';

(function($){
	$(document).ready(function() {
		// Code
		var button = document.querySelectorAll('.game-menu__tablinks'),
			tabContent = document.querySelectorAll('.game-promo__tabcontent'),
			ratingStar = document.querySelectorAll('.poster__rating');

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener('click', function(event) {
				showTab(event);
			})

			button[i].dataset.number = `tab-${i}`;
			tabContent[i].id = button[i].dataset.number
		}

		for (let k = 0; k < ratingStar.length; k++) {
			for (let j = 0; j < ratingStar[k].children.length; j++) {
				ratingStar[k].children[j].dataset.position = j;
				ratingStar[k].children[j].addEventListener('click', function(event) {
					ratingFunc(event);
				});
 			}
		}


		tabContent[0].style.display = 'flex';


	});
})(jQuery);


function showTab(e) {
	var parentElem = e.currentTarget.parentElement,
		childrenElem = parentElem.children,
		currElem = e.currentTarget,
		tabContent = document.querySelectorAll('.game-promo__tabcontent');

	for (let i = 0; i < childrenElem.length; i++) {
		childrenElem[i].classList.remove('active');
	}

	for (let i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = 'none';
	}

	currElem.classList.add('active');
	document.getElementById(currElem.getAttribute('data-number')).style.display = 'flex';
}

function ratingFunc(e) {
	var parent = e.currentTarget.parentElement;
	for (let i = 0; i < parent.children.length; i++) {
		parent.children[i].classList.remove('fill');
	}

	var key = e.currentTarget.dataset.position;
	for (let i = 0; i <= key; i++) {
		parent.children[i].classList.add('fill');
	}
}