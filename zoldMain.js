let navBarLinks = document.querySelectorAll("nav a");
let navBar = document.getElementById("nav")
let navPos = navBar.offsetTop;
let navNo = 0;

window.addEventListener("scroll", e=>{
	var i = 0;
	navBarLinks.forEach(link=>{
		let section = document.querySelector(link.hash);
		if(window.pageYOffset + navPos + 25 >= section.offsetTop && i != navNo)
		{
			link.classList.add("active");
			navNo = i;
		}
		++i
	})
	i=0;
	navBarLinks.forEach(link=>{
		if(i != navNo)
		{
			link.classList.remove("active");
		}
		++i;
	})
});

function ShowSlides(slideContainerNo, slideDiff)
{
	if(slideContainerNo > document.getElementsByClassName("slidesContainer").length - 1){
		throw new Error('Slide Container Number does not exists');
	}

	let i;
	let slideIndex;

	let slideContainer = document.getElementsByClassName("slidesContainer")[slideContainerNo];
	let slides = slideContainer.getElementsByClassName("slides");

	for(i = 0; i < slides.length; i++)
	{
		if(slides[i].style.display == "block")
		{
			slideIndex=i;
			break;
		}
	}
	slideIndex += slideDiff;

	if(slideIndex > slides.length-1) {
		slideIndex = 0;
	}
	else if(slideIndex < 0){
		slideIndex = slides.length - 1;
	}
	
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	slides[slideIndex].style.display = "block";
	//captionText.innerHTML = dots[slideIndex].alt;
}