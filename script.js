/*
const button = document.getElementsByClassName('action-button')[0];
const expandableContent = document.querySelector('.expandable-content');

console.log(button, expandableContent, 5)

button.addEventListener('click', function () {
	expandableContent.classList.add('expanded');
	button.textContent = 'Save';
});
*/

document.addEventListener('DOMContentLoaded', function () {
	const button = document.querySelector('.action-button');
	const expandableContent = document.querySelector('.expandable-content');

	if (button && expandableContent) {
		button.addEventListener('click', function () {
			expandableContent.classList.add('expanded');
			button.textContent = 'Save';
		});
	} else {
		console.log('Elements not found!');
	}
});
