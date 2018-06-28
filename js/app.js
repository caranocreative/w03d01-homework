class Tomagotchi {
	constructor(name, fullness, age, activity, tired, sleepy, happy, alive){
		this.name = name;
		this.fullness = 5;
		this.age = 1;
		this.activity = 5;
		this.tired = 5;
		this.sleepy = true;
		this.happy = true;
		this.alive = true;
	};

	eat() {
		if(this.alive) {
			if(this.fullness < 10) {
				console.log("That was delicious! thank you!");
				this.fullness++;
			} else if (this.fullness > 9) {
				console.log("No thanks! I'm full!");
			} 
		}else {
			console.log("Cannot eat when you are dead.");
		}
	};

	isHungry() {
		// blue is satisfied at 6	
		return (this.fullness <= 5);
	};

	sleep(){
		if(this.sleepy) {
			console.log("I needed that! thank you!");
			this.tired++;
			if(this.tired < 10) {
				this.sleepy = true;
			} else {
				this.sleepy = false;
			}
		} else {
			console.log("No thanks! I'm Awake!");
		}
	};

	isTired() {
		return this.sleepy;
	};	

	play(){
		if(this.happy) {
			console.log("Yippeee! thank you!");
			this.activity++; 
			//if(this.activity < 10) {
				//this.activity++
				//} 
			if(this.activity < 10) {
				this.happy = true;
			} else {
				this.happy = false;
			}
		} 
		
	};

	isHappy() {
		return this.happy;
	};

};

let blue = new Tomagotchi();

$(document).ready(function(){
	let t = 1;
	let year = 8;  // 2 minutes

	let nameTomagotchi = window.prompt('Name your Tomagotchi:');
	$('#nameTomagotchi').text('Name: ' + nameTomagotchi);

	setInterval(function() {
		// is where time passes for blue
		t++;


		// how does blue get sad?
		if (blue.alive) { //hunger

			if(t % 10 == 0) {
				if(blue.alive) {
					blue.fullness--;
					console.log("Blue is hungry!");
					if(blue.fullness == 0) {
						blue.alive = false;
						console.log("Blue died of hunger");
						
					}
				}
				
			}

			if(t % year == 0) { //age
				blue.age++;
				console.log("Blue aged a year!");
				
				// implement all picture changes here
				if(blue.age == 2) {
					$("#bluesPicture").attr('src', 'pics/young1.png');

				} else if (blue.age == 3) {
					$("#bluesPicture").attr('src', 'pics/teen2.png');
				} else if (blue.age == 4) {
					$("#bluesPicture").attr('src', 'pics/adultcreature2.png');
				}

			}

			if(t % 13 == 0){ //play activity happy
				if(blue.alive){
					if(blue.happy){
						blue.activity--;
					console.log("I am dying of boredom!");	
					if(blue.happy == 0) {
						blue.alive = false;
						console.log('Blue is rebooted');
					}
					}
				}							
			}	
			if(t % 16 == 0){ //light tired
				if(blue.alive){
					if(blue.sleepy){
						blue.tired--;
					console.log("I am soooo tired!");	
					if(blue.tired == 0) {
						blue.alive = false;
						console.log('Sleep no more needed');
					}
				}
				}					
			}		
		} else {
			clearInterval();
		}		
		$('#pgAge').css("width", (blue.age /8 * 100) + '%'); 	
		$('#pgFeed').css("width", (blue.fullness * 10)+ "%");
		$('#pgLight').css("width", (blue.tired * 10)+ "%");
		$('#pgPlay').css("width", (blue.activity * 10)+ "%");

	}, 1000);



$('.play').click(function() {
	blue.play();
});

$('.feed').click(function() {
	blue.eat();
});	

$('.light').click(function() {
	blue.sleep();
});	

});




