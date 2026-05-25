//your code here!

const list = document.getElementById("infi-list");

let count = 1;

function addItem() {
	const li = document.createElement("li");
	li.innerText = `List Item ${count++}`;
	list.appendChild(li);
}

// Initial 10 items
for (let i = 0; i < 10; i++) {
	addItem();
}

// Infinite scroll
window.addEventListener("scroll", () => {

	if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {

		addItem();
		addItem();
	}
});