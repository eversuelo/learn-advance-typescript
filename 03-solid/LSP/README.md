# Liskov Substitution Principle (LSP)

> "If S is a subtype of T, then objects of type T may be replaced with objects of type S without altering any of the desirable properties of the program." — Barbara Liskov

---

## 📖 What is LSP?

The **Liskov Substitution Principle** states that any subclass or derived class should be substitutable for its base class without breaking the program. In other words, a child class must be able to do everything the parent class can do — and shouldn't override behavior in a way that violates the contract the parent establishes.

Breaking LSP leads to:
- Unexpected errors when using polymorphism
- `instanceof` checks scattered through the code
- Classes that override methods just to throw exceptions or do nothing

---

## 🚩 Code Smell Example

[`code-smell.ts`](./code-smell.ts) shows a `Penguin` subclass that **violates LSP** because it inherits from `Bird` but cannot fly — breaking the expected contract.

```typescript
class Bird {
  fly(): void { console.log('Flying!'); }
}

class Penguin extends Bird {
  fly(): void {
    throw new Error("Penguins can't fly!"); // ❌ breaks the substitution
  }
}
```

**Problem:** any code that works with `Bird` will break when given a `Penguin`.

---

## ✅ Correct LSP Implementation

[`liskov-substitution.ts`](./liskov-substitution.ts) uses proper abstractions so that only birds that actually fly implement the `fly` behavior.

```typescript
interface Bird { move(): void; }
interface FlyingBird extends Bird { fly(): void; }

class Sparrow implements FlyingBird { ... }   // ✅ can fly
class Penguin implements Bird       { ... }   // ✅ can move, doesn't claim to fly
```

---

## ▶️ How to Run the Examples

```bash
npx ts-node code-smell.ts
npx ts-node liskov-substitution.ts
```

---

## 📚 Further Reading

- Barbara Liskov — _A Behavioral Notion of Subtyping_ (1994)
- Robert C. Martin — _Clean Architecture_ (Chapter on LSP)
- Wikipedia — [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle)
