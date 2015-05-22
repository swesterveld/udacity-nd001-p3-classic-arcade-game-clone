/* Some global variables that might be usefull */
var rowHeight = 83;
var colWidth = 101;
var rowCount = 6;
var colCount = 5;
var totalWidth = colCount * colWidth;

var initialEnemyCol = 0;
var initialPlayerCol = 2;
var initialPlayerRow = 5;
var minEnemies = 3;
var maxEnemies = 6;
var numEnemies = Math.floor((Math.random() * (maxEnemies-minEnemies)) + 0.5) + minEnemies;

console.log("width: " + colWidth + "\nheight: " + rowHeight);

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // Set the Enemy initial location
    this.reset();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // TODO: update the Enemy location
    this.x += dt * this.speed;
    // TODO: handle collision with the Player

    // reset when Enemy left the canvas
    if (this.x > totalWidth) {
        this.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*
 * Reset to initial state
 */
Enemy.prototype.reset = function() {
    this.row = Math.floor((Math.random() * 3) + 1);
    this.x = -colWidth;
    this.y = this.row * rowHeight;
    // Set the Enemy speed
    this.speed = (4-this.row) * 110; // XXX let's just try 100 for now
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Set default values
    this.reset();
    // Load the image to this.sprite
    this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function(dt) {
    // TODO: implement
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    // TODO: implement
}

Player.prototype.handleInput = function() {
    // TODO: implement
    /*
     * This method should receive user input, allowedKeys (the key which
     * was pressed) and move the player according to that input.
     * Left key should move the player to the left.
     * Right key should move the player to the right.
     * Up key should move the player up
     * Down key should move the player down
     * The player cannot move off screen
     * If the player reaches the water the game should be reset by
     * moving the player back to the initial locaion
     */
}

/*
 * Reset to initial state
 */
Player.prototype.reset = function() {
    // Set the player initial Location
    this.col = initialPlayerCol;
    this.row = initialPlayerRow;

    this.x = this.col * colWidth;
    this.y = this.row * rowHeight;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
for (i=0; i<numEnemies; i++) {
    allEnemies.push(new Enemy());
}
console.log("Amount of enemies created: " + allEnemies.length);
console.log(numEnemies);
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
