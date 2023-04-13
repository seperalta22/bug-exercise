let menu;

function destroyMenu() {
	document.body.removeChild(menu);
}

function createMenu() {
	menu = document.createElement('div');
	menu.classList.add('menu');

	// close button
	const closeButton = document.createElement('button');
	closeButton.classList.add('close-button');
	closeButton.textContent = 'X';
	closeButton.addEventListener('click', destroyMenu);

	// options list
	const optionsList = document.createElement('ul');
	optionsList.classList.add('options-list');

	// options
	const portfolioOption = document.createElement('li');
	const portfolioLink = document.createElement('a');
	portfolioLink.href = '#portfolio';
	portfolioLink.textContent = 'Portfolio';
	portfolioLink.addEventListener('click', destroyMenu);
	portfolioOption.appendChild(portfolioLink);

	const aboutOption = document.createElement('li');
	const aboutLink = document.createElement('a');
	aboutLink.href = '#about';
	aboutLink.textContent = 'About';
	aboutLink.addEventListener('click', destroyMenu);
	aboutOption.appendChild(aboutLink);

	const contactOption = document.createElement('li');
	const contactLink = document.createElement('a');
	contactLink.href = '#contact';
	contactLink.textContent = 'Contact';
	contactLink.addEventListener('click', destroyMenu);
	contactOption.appendChild(contactLink);

	// append options to list
	optionsList.appendChild(portfolioOption);
	optionsList.appendChild(aboutOption);
	optionsList.appendChild(contactOption);

	// append list and button to menu
	menu.appendChild(closeButton);
	menu.appendChild(optionsList);

	// append menu to body
	document.body.appendChild(menu);
}

const hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', createMenu);
