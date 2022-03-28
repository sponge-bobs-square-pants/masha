
let counter = 0;
 // nav-bar scroll script

window.onscroll = function() {scrolling()};

function scrollReduction(add1, add2) {
	const array = document.querySelectorAll("a");
	array.forEach(element => {
		element.className = "";
		element.classList.add(add1);
		element.classList.add(add2);
	});
} 

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
const obj = document.getElementById("value");
const obj1 = document.getElementById("value1");
const obj2 = document.getElementById("value2");

function Counting() {
	
	if (counter <= 0){
		animateValue(obj, 2022, 2014, 2500);
	  	animateValue(obj1, 0, 8, 2500);
	  	animateValue(obj2, 0, 200, 2500);
	  	counter++;
	}
}

function scrollTop(){
	document.body.scrollTop;
}



function scrolling() {
 	if ((scrollTop() > 0 && scrollTop()< 800) || (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 800)) {
	scrollReduction("nav-bar", "nav-bar:hover");
 	 }
 	else if ((scrollTop() >= 800 && scrollTop() < 815) || (document.documentElement.scrollTop >= 800 && document.documentElement.scrollTop < 815)) {
  		Counting();
  		scrollReduction("scroll", "scroll:hover");
 	}
	else if ((scrollTop() >= 815 && scrollTop() < 1590) || (document.documentElement.scrollTop >= 815 && document.documentElement.scrollTop < 1590)) {
	scrollReduction("scroll", "scroll:hover");
  	}
	else if ((scrollTop() >= 1590 && scrollTop() < 2420) || (document.documentElement.scrollTop >= 1590 && document.documentElement.scrollTop < 2420)) {
 	scrollReduction("scroll1580", "scroll1580:hover");
	}
	else if ((scrollTop() >= 2420 && scrollTop() < 3160) || (document.documentElement.scrollTop >= 2420 && document.documentElement.scrollTop < 3160)) {
		scrollReduction("scroll", "scroll:hover")
	}
	else if (scrollTop() >= 3160 || document.documentElement.scrollTop >=3160){
		scrollReduction("scroll1580", "scroll1580:hover");
	}

}

//Sending Mail

function sendMail() {
  window.location.href = "mailto:new-semkino@yandex.ru";
}

const button = document.getElementById("map1");
button.addEventListener("click", MapFunction);

function MapFunction (){
	window.open("https://www.google.com/maps/place/Parkovaya+Ulitsa,+7,+Sankt-Peterburg,+196084/@59.89284,30.3367743,17z/data=!3m1!4b1!4m5!3m4!1s0x469630156432dfe7:0xd8c5c7ab58e137a8!8m2!3d59.89284!4d30.338963");
}

