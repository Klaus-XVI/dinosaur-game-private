// kaboom();

// loadSprite("clickableImage", "assets/egg1.png");

// add([
//   sprite("clickableImage"),
//   pos(450,200)
// ]);

kaboom({
  global: true,
  canvas: document.getElementById("game"),
  width: 400,
  height: 400,
});

// Load the default image
loadSprite("defaultImage", "assets/egg1.png");

// Load the new image
loadSprite("newImage", "assets/egg2.png");

// Show the default image
const clickableImage = add([
  sprite("defaultImage"),
  pos(0, 0),
  scale(2),
]);

let spaceCount = 0;

// Change the image when the space bar is pressed 10 times
keyDown(32, () => {
  spaceCount++;
  if (spaceCount >= 10) {
    clickableImage.useSprite("newImage");
  }
});
