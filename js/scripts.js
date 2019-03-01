/* scripts.js */

// ***
// Combination Lock
// ***

var combinationLock = {
	combination: 1618,
	locked: true,
	wheels: [0, 0, 0, 0],
	increment: function(wheel) {
		if (this.wheels[wheel] === 9) {
			this.wheels[wheel] = 0;
		} else {
			this.wheels[wheel]++;
		}
	},
	decrement: function(wheel) {
		if (this.wheels[wheel] === 0) {
			this.wheels[wheel] = 0;
		} else {
			this.wheels[wheel]--;
		}
	},
	check: function() {
		if (this.combination === parseInt(this.wheels.join(''))) {
			this.locked === false;
		} else {
			this.locked === true;
		}
	},
	spin: function() {
		// randomize the wheels
		for (i = 0; i < 4; i++) {
			this.wheels[i] = getRandomInt(10, -1);
		}
	}
}

// ***
// Reusable Functions
// ***

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// ***
// Presentation
// ***

