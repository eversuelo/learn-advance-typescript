// ❌ Code Smell: Violates the Interface Segregation Principle (ISP)
// A single fat `Worker` interface forces Robot to implement eat() — which it will never do.

interface Worker {
  work(): void;
  eat(): void; // ❌ Robots don't eat — this forces an irrelevant dependency
}

class Human implements Worker {
  work(): void { console.log('Human is working...'); }
  eat(): void  { console.log('Human is eating...'); }
}

class Robot implements Worker {
  work(): void { console.log('Robot is working...'); }
  eat(): void  {
    throw new Error("Robots don't eat!"); // ❌ forced stub — violates ISP
  }
}

const human = new Human();
human.work();
human.eat();

const robot = new Robot();
robot.work();
robot.eat(); // ❌ throws at runtime

export {};
