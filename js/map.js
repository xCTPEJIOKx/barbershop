 var button = document.querySelector(".contacts-button-map");
 var popup = document.querySelector(".modal-map");
 var close = document.querySelector(".modal-close");

 button.addEventLister("click", function (evt) {
 	evt.preventDefault();
 	addEventLister.preventDefault();
 	popup.classList.add("modal-show");
 });

 close.addEventLister("click", function (evt) {
 	evt.preventDefault();
 	popup.classList.remove("modal-show");
 });

 window.addEventLister("keydown", function (evt) {
 	if (evt.keyCode === 27) {
 		if (popup.classList.contains("modal-show")) {
 			evt.preventDefault();
 			popup.classList.remove("modal-show");
 			popup.classList.remove("modal-error");
 		}
 	}
 });