class Tomagotchi {
	constructor(name, fullness, hungry, sleepiness, happiness, age){
		this.name = name;
		this.fullness = 5;
		this.age = 1;
		this.activity = 5;
		this.tired = true;
		this.sleepy = true;
		this.happy = true;
		this.alive = true;
	};

	eat() {
		if(this.alive) {
			if(this.fullness < 10) {
				console.log("That was delcious! thank you!");
				this.fullness++;
			} else if (this.fullness > 9) {
				console.log("No thanks! I'm full!");
			} 
		}else {
			console.log("Cannot eat when you are dead.");
		}
	};

	isHungry() {
		// our dude is satisfied at 6	
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
	let year = 120;  // 2 minutes

	setInterval(function() {
		// is where time passes for blue
		t++;

		// how does blue get sad?

		if(t % 2 == 0) {
			if(blue.alive) {
				blue.fullness--;
				console.log("Blue is hungry!");
				if(blue.fullness == 0) {
					blue.alive = false;
					console.log("Blue died of hunger");
				}
			}
		}

		if(t % year == 0) {
			blue.age++;
			console.log("Blue aged a year!");
			if(blue.age == 2) {
				// chnage picture to 2 year old
			} else if (blue.age == 6) {
				// change picture to teenager blue
			}
		}
		if(t % 30 == 0){
			blue.activity--;
			console.log("I am dying of boredom!");
			if(blue.activity == 0){
				console.log('Blue is rebooted');
			}
			
		}	

	}, 1000);
});


$('.play').click(function() {
	blue.play();
});

$('.feed').click(function() {
	blue.eat();
});




