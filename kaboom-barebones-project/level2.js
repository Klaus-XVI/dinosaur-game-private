kaboom();

loadSprite("dino", "assets/dino.png");
loadSprite("bg2", "assets/bg2.png")
loadSprite("nuggets", "assets/nugget.png");



  add([
    sprite("bg2", {width: width(), height: height()}),
    z(-2),
  ]);



const player = add([
  sprite("dino"),
  pos(width() / 2, height() / 1.5),
  scale(0.25),
]);


onKeyDown("left", () => {
  player.move(-280, 0);
});

onKeyDown("right", () => {
  player.move(280, 0);
});

onKeyDown("up", () => {
  player.move(0, -200);
});

onKeyDown("down", () => {
  player.move(0, 200);
});


// const food= add([
//   sprite("nugget"),
//   pos(width() / 2, height() / 2),

// ]);

// player.action(() => {
//   player.move(0, 100);
// });

// // set gravity
// gravity(1200);