// Гамбургер
var menu = (function () {
	var hamburger = document.querySelector(".hamburger"),
		menu = document.querySelector(".header__wrapper");
	hamburger.addEventListener("click", function () {
		this.classList.toggle("is-active");
		menu.classList.toggle("header__wrapper-open");
	});
})(); // call menu

// Выпадающая форма
if (document.querySelector(".js-booking")) {
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
}
//  Кнопки Минус и Плюс
$(document).ready(function () {
	$("body").on("click", ".minus, .plus", function () {
		var $row = $(this).closest(".number");
		var $input = $row.find(".number-text");
		var step = $row.data("step");
		var val = parseFloat($input.val());
		if ($(this).hasClass("minus")) {
			val -= step;
		} else {
			val += step;
		}
		$input.val(val);
		$input.change();
		return false;
	});

	$("body").on("change", ".number-text", function () {
		var $input = $(this);
		var $row = $input.closest(".number");
		var step = $row.data("step");
		var min = parseInt($row.data("min"));
		var max = parseInt($row.data("max"));
		var val = parseFloat($input.val());
		if (isNaN(val)) {
			val = step;
		} else if (min && val < min) {
			val = min;
		} else if (max && val > max) {
			val = max;
		}
		$input.val(val);
	});
});

// Рейтинг
if ($(".rating").length > 0) {
	$(".rating").starRating({
		starSize: 18,
		hoverColor: "#81B3D2",
		activeColor: "#81B3D2",
		ratedColor: "#81B3D2",
	});
}

const uiSlider = document.querySelector("#slider");
if (uiSlider) {
	noUiSlider.create(uiSlider, {
		start: [0, 3000],
		connect: true,
		range: {
			min: 0,
			max: 5000,
		},
	});
	const inputNumberStart = document.querySelector(".range__input--start");
	const inputNumberEnd = document.querySelector(".range__input--end");

	uiSlider.noUiSlider.on("update", function (values, handle) {
		var value = values[handle];

		if (handle) {
			inputNumberEnd.value = Math.round(value);
		} else {
			inputNumberStart.value = Math.round(value);
		}
	});

	inputNumberStart.addEventListener("change", function () {
		uiSlider.noUiSlider.set([null, this.value]);
	});
	inputNumberEnd.addEventListener("change", function () {
		uiSlider.noUiSlider.set([null, this.value]);
	});
}

// Календарь
// Инициализация
if ($(".booking__input--date").length > 0) {
	$(".booking__input--date").datepicker();
}
