# Interface Segregation Principle (ISP)

> "Clients should not be forced to depend upon interfaces that they do not use." — Robert C. Martin

---

## 📖 What is ISP?

The **Interface Segregation Principle** states that no class should be forced to implement methods it doesn't use. Instead of one large "fat" interface, prefer several small, specific interfaces. This way each class only depends on the methods it actually needs.

Breaking ISP leads to:
- Classes implementing methods with empty bodies or throwing `NotImplementedError`
- High coupling between unrelated behaviors
- Harder to test individual features in isolation

---

## 🚩 Code Smell Example

[`code-smell.ts`](./code-smell.ts) shows a single fat `Worker` interface that forces a `Robot` to implement `eat()` — something it will never do.

```typescript
interface Worker {
  work(): void;
  eat(): void;  // ❌ Robots don't eat
}

class Robot implements Worker {
  work(): void { console.log('Working...'); }
  eat(): void  { throw new Error("Robots don't eat!"); } // ❌ forced stub
}
```

---

## ✅ Correct ISP Implementation

[`interface-segregation.ts`](./interface-segregation.ts) splits the interface so each class only implements what it can actually do.

```typescript
interface Workable { work(): void; }
interface Eatable  { eat(): void;  }

class Human implements Workable, Eatable { ... }  // ✅ works and eats
class Robot implements Workable          { ... }  // ✅ only works
```

---

## ▶️ How to Run the Examples

```bash
npx ts-node code-smell.ts
npx ts-node interface-segregation.ts
```

---

## 📚 Further Reading

- Robert C. Martin — _Agile Software Development, Principles, Patterns, and Practices_
- Wikipedia — [Interface segregation principle](https://en.wikipedia.org/wiki/Interface_segregation_principle)
