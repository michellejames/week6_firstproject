console.log("Hello World from main.js!");

TweenMax.from(".headline", 1.5,{top:"-100px", opacity:"0", overwrite:"none"});

TweenMax.from(".header", 1.5,{top:"-100px", opacity:"0", overwrite:"none"});

// TweenMax.to(".hero__product", 1.5,{x:"-200px", opacity:"1", overwrite:"none"});

TweenMax.to(".stack-green", 1.5,{left:"230px", opacity:"1", overwrite:"none"});
TweenMax.to(".stack-blue", 1.5,{left:"460px", opacity:"1", overwrite:"none"});
TweenMax.to(".stack-red", 1.5,{left:"690px", opacity:"1", overwrite:"none"});


TweenMax.to(".teaser", 1.4,{y: 25, repeat: -1, yoyo: true, ease: Power3.easeInOut});


$(function () {
	$(".teaser").on("click", function (){
		$(this).fadeOut("slow");
		$.scrollTo(".hero", 400);
	})

	$(".ad-container").parallax(
		{imageSrc: "assets/img/main-img.jpg"});
});

new Cocoen(document.querySelector('.cocoen'));
