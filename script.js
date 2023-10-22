const divIDs = {
	home: "home",
	faq: "faq",
	contact: "contact"
};

const navIDs = {
	home: "nav-home",
	faq: "nav-faq",
	contact: "nav-contact"
}

function showDiv(id) {
	for (const key in divIDs) {
		if (key === id) {
			document.getElementById(divIDs[key]).classList.remove('hidden');
			document.getElementById(navIDs[key]).classList.add('active-page');
		} else {
			document.getElementById(divIDs[key]).classList.add('hidden');
			document.getElementById(navIDs[key]).classList.remove('active-page');
		}
	}
}