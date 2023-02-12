let allSlidesContainer = document.getElementsByClassName("slidesContainer");
let currentHistory = null;

function navBarClick(x)
{
	x.classList.toggle("change");
}

function hover(x)
{
	x.classList.toggle("hover");
}

function selectHistory(x)
{
	if (currentHistory == null)
	{
		currentHistory = document.querySelector('[data-year="2022"]');
    }
	if (currentHistory != x) {
		let elements;
		{
			elements = document.querySelectorAll('[data-year="' + currentHistory.getAttribute("data-year") + '"]');
			for (i = 0; i < elements.length; i++) {
				elements[i].classList.toggle("historySelected");
			}
		}
		elements = document.querySelectorAll(`[data-year="${x.getAttribute("data-year")}"]`);
		for (i = 0; i < elements.length; i++) {
			elements[i].classList.toggle("historySelected");
		}
		currentHistory = x;
	}
}

function ShowSlides(slideContainerNo, slideDiff)
{
	if (slideContainerNo > allSlidesContainer.length - 1){
		throw new Error('Slide Container Number does not exists');
	}

	let i;
	let slideIndex;

	let slideContainer = allSlidesContainer[slideContainerNo];
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