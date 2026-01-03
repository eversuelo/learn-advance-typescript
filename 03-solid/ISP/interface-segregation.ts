// ✅ Correct ISP Implementation: split the fat interface into small, focused ones.
// Each class only implements what it can actually do.

interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

// Human can both work and eat
class Human implements Workable, Eatable {
  work(): void { console.log('Human is working...'); }
  eat(): void  { console.log('Human is eating...');  }
}

// Robot can only work — no forced stubs
class Robot implements Workable {
  work(): void { console.log('Robot is working...'); }
}

// ✅ Functions depend only on what they need
function makeWork(worker: Workable): void {
  worker.work();
}

function makeEat(eater: Eatable): void {
  eater.eat();
}

const human = new Human();
const robot = new Robot();

makeWork(human); // ✅ Human is working...
makeEat(human);  // ✅ Human is eating...
makeWork(robot); // ✅ Robot is working...

export {};
