// ✅ Correct LSP Implementation: proper abstractions ensure all subtypes honor their contract.
// Only birds that can fly implement FlyingBird — Penguin is never forced to fly.

interface Bird {
  move(): void; // all birds can move
}

interface FlyingBird extends Bird {
  fly(): void; // only birds that actually fly implement this
}

class Sparrow implements FlyingBird {
  move(): void { console.log('Sparrow is moving...'); }
  fly(): void  { console.log('Sparrow is flying!'); }
}

class Penguin implements Bird {
  move(): void { console.log('Penguin is swimming!'); } // ✅ moves differently, never pretends to fly
}

// ✅ Any FlyingBird can safely be passed here
function makeBirdFly(bird: FlyingBird): void {
  bird.fly();
}

// ✅ Any Bird can safely be passed here
function moveBird(bird: Bird): void {
  bird.move();
}

const sparrow = new Sparrow();
const penguin = new Penguin();

makeBirdFly(sparrow); // ✅ Sparrow is flying!
moveBird(sparrow);    // ✅ Sparrow is moving...
moveBird(penguin);    // ✅ Penguin is swimming!

export {};
