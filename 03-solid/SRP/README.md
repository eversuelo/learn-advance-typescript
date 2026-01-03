# Single Responsibility Principle (SRP)

> "A class should have only one reason to change." — Robert C. Martin

---

## 📖 What is SRP?

The **Single Responsibility Principle (SRP)** is a software design principle that states that a class should have only one reason to change. This means that a class should have only one responsibility. If we have a class that has more than one responsibility, we should refactor it to have only one responsibility.

---

## ❓ What happens if we don't apply SRP?

If we don't apply the SRP, we will have a class that has more than one responsibility. This means that if we need to change one responsibility, we might break the other responsibility. This is a violation of the SRP.

Our code will be **more coupled, harder to maintain, and harder to test**.

---

## ✏️ How to apply SRP?

1. **Identify the responsibilities** of the class — write them down on a piece of paper.
2. **Analyze the responsibilities** — see if you can split them into smaller, focused classes, each with a single responsibility.
3. **Refactor** — create new classes for each responsibility.
4. **Test** — make sure everything is working as expected. If not, repeat the process.

---

## 🚩 Code Smell Example

[`code-smell.ts`](./code-smell.ts) shows a class that **violates SRP** by handling both validation _and_ persistence inside the same class:

```typescript
class UserServiceSmell {
  validateUser(data: { name: string; email: string }): boolean { ... }
  saveUser(data: { name: string; email: string }): void { ... }
}
```

**Problem:** if the validation logic changes, you touch the same class responsible for saving data — two reasons to change.

---

## ✅ Correct SRP Implementation

[`single-responsibility.ts`](./single-responsibility.ts) separates each concern into its own class:

```typescript
class UserValidator   { isValid(data): boolean { ... } }  // only validates
class UserRepository  { save(data): void { ... } }        // only persists
class UserService     { createUser(data): void { ... } }  // orchestrates
```

Each class has **one reason to change**.

---

## ▶️ How to Run the Examples

```bash
# Run the code smell (violates SRP)
npx ts-node code-smell.ts

# Run the correct SRP implementation
npx ts-node single-responsibility.ts
```

---

## Avoid Side Effects

The Side Effects are the changes that a function makes to the state of the system. For example, if a function modifies a global variable, it has a side effect. If a function writes to a file, it has a side effect. If a function sends a request to a server, it has a side effect. In SRP we want to avoid side effects as much as possible.

Other side effects are:

- Extends Local Variables
- Local Scope needs Global Variables
- Prints
- Writes to a file
- Sends a request to a server
- Modifies a global variable
- Concurrence + Parallelism can create multiples issues in code, for exampel Side Effects

## Concurrence + Parallelism Avoiding Side Effectrs

## 📚 Further Reading

- Robert C. Martin — _Clean Architecture_ (Chapter on SRP)
- Wikipedia — [Single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)
