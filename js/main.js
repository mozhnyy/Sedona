// Выпадающая форма
const bookingBtn = document.querySelector(".js-booking");
const bookingForm = document.querySelector(".booking-form");
const bookingInner = document.querySelector(".booking__inner");

bookingBtn.addEventListener("click", function (e) {
	e.preventDefault();
	bookingForm.classList.toggle("show");
	bookingInner.style.overflow = bookingForm.classList.contains("show")
		? "unset"
		: "hidden";
});

// Рейтинг

$(".my-rating").starRating({
	starSize: 25,
	callback: function (currentRating, $el) {
		// make a server call here
	},
});
