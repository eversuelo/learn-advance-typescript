// ❌ Code Smell: Violates the Liskov Substitution Principle (LSP)
// Penguin extends Bird but breaks the expected fly() contract.
// Any code receiving a Bird will crash when given a Penguin.

class Bird {
  fly(): void {
    console.log('Flying!');
  }
}

class Sparrow extends Bird {
  fly(): void {
    console.log('Sparrow is flying!');
  }
}

class Penguin extends Bird {
  fly(): void {
    throw new Error("Penguins can't fly!"); // ❌ breaks the substitution contract
  }
}

function makeBirdFly(bird: Bird): void {
  bird.fly(); // ❌ will throw when bird is a Penguin
}

makeBirdFly(new Sparrow()); // ✅ works fine
makeBirdFly(new Penguin()); // ❌ throws at runtime

export {};
