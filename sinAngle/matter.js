//The Matter.Engine module contains methods for creating and manipulating engines. An engine is a controller that manages updating the simulation of the world. See Matter.Runner for an optional game loop utility.

//engine

let engine = Matter.Engine.create();

//render
let render = Matter.Render.create({
//   element: document.getElementById("container"),
  engine: engine,
  options: {
    width: 20,
    height: 20,
    wireframes: false,
  },
});

Matter.Render.run(render);

//runner
let runner = Matter.Runner.create();
Matter.Runner.run(runner, engine);

//params: x, y, width, height, options

let square = Matter.Bodies.rectangle(200, 100, 50, 50, {
  isStatic: false,
  friction: 0.2,
  restitution: 0.5,
  density: 0.01,
});

Matter.World.add(engine.world, square);
