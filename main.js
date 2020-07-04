const distance = 50

window.onload = function(){
	const buttonLeft = document.querySelector('.left')
	const buttonRight = document.querySelector('.right')
	const buttonUp = document.querySelector('.up')
	const buttonDown = document.querySelector('.down')

	const myCircle = document.getElementById('circle')

	const redChange = document.querySelector('.red')
	const blueChange = document.querySelector('.blue')
	const greenChange = document.querySelector('.green')

	/////////////////////////// PANEL CONTROL

	buttonLeft.onclick = function(){
		const leftDirection = myCircle.offsetLeft
 		if(leftDirection >= 0){
			myCircle.style.left = leftDirection - distance
		}	
	}

	buttonRight.onclick = function(){
		const leftDirection = myCircle.offsetLeft
		myCircle.style.left = leftDirection + distance
	}

	buttonUp.onclick = function(){
		const topDirection = myCircle.offsetTop
		if(topDirection >= 0){
			myCircle.style.top = topDirection - distance
		}	
	}

	buttonDown.onclick = function(){
		const topDirection = myCircle.offsetTop
		myCircle.style.top = topDirection + distance
	}

	/////////////////////////// TECLAS

	window.onkeydown = function(event){
		const leftDirection = myCircle.offsetLeft
		const topDirection = myCircle.offsetTop

		switch(event.key){
			case 'ArrowUp':
				if(topDirection >= 0){
					myCircle.style.top = topDirection - distance
				}else{
					myCircle.style.top = topDirection + distance*2
				}			
				break
			case 'ArrowDown':
				myCircle.style.top = topDirection + distance
				break
			case 'ArrowLeft':
				if(leftDirection >= 0){
					myCircle.style.left = leftDirection - distance
				}else{
					myCircle.style.left = leftDirection + distance*2
				}		
				break
			case 'ArrowRight':
				myCircle.style.left = leftDirection + distance	
				break
		}
	}

	/////////////////////////// COLORES

	function getColor(){
		let background = window.getComputedStyle(myCircle).getPropertyValue("background-color")
		return background
	}

	redChange.onclick = function() {
		if(getColor() !== 'rgb(255, 0, 0)') {
			myCircle.style = "background-color: rgb(255, 0, 0)"
		}
	}

	greenChange.onclick = function() {
		if(getColor() !== 'rgb(0, 255, 0)') {
			myCircle.style = "background-color: rgb(0, 255, 0)"
		}
	}

	blueChange.onclick = function() {
		if(getColor() !== 'rgb(0, 0, 255)') {
			myCircle.style = "background-color: rgb(0, 0, 255)"
		}
	}


	/////////////////////// LIMITES

	function limits(){

	}
}