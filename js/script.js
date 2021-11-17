let slideUpBtn = document.querySelector('#slideUp'),
	slideDownBtn = document.querySelector('#slideDown'),
	slideBtnPause = true;


slideDownBtn.addEventListener('click', () => {
	if (slideBtnPause) {
		slideBtnPause = false;
		window.scrollBy({top: document.documentElement.clientHeight, behavior: 'smooth'});
		setTimeout(function() { slideBtnPause = true; }, 600);
	}
});

slideUpBtn.addEventListener('click', () => {
	if (slideBtnPause) {
		slideBtnPause = false;
		window.scrollBy({top: -document.documentElement.clientHeight, behavior: 'smooth'});
		setTimeout(function() { slideBtnPause = true; }, 600);
	}
});

document.addEventListener('keydown', function(event) {
	if (event.code == 'ArrowDown' || event.code == 'ArrowUp') {
		event.preventDefault();
	}
});

document.addEventListener('keydown', function(event) {
	if (event.code == 'ArrowDown' && slideBtnPause) {
		slideBtnPause = false;
		window.scrollBy({top: document.documentElement.clientHeight, behavior: 'smooth'});
		setTimeout(function() { slideBtnPause = true; }, 600);
	}
});

document.addEventListener('keydown', function(event) {
	if (event.code == 'ArrowUp' && slideBtnPause) {
		slideBtnPause = false;
		window.scrollBy({top: -document.documentElement.clientHeight, behavior: 'smooth'});
		setTimeout(function() { slideBtnPause = true; }, 600);
	}
});