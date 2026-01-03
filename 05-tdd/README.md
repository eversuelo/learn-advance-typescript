# Test-Driven Development (TDD)

> "Write a test. Watch it fail. Make it pass. Refactor. Repeat." — Kent Beck

---

## 📖 What is TDD?

**Test-Driven Development** is a software development practice where you write tests *before* writing production code. The cycle is:

```
🔴 Red   → Write a failing test
🟢 Green → Write the minimum code to make it pass  
♻️ Refactor → Clean up without breaking the test
```

This forces you to think about the design of your code *before* you write it.

---

## 📚 Topics

| Folder | Description |
|--------|-------------|
| [red-green-refactor](./red-green-refactor/) | The TDD cycle explained with step-by-step examples |
| [unit-testing](./unit-testing/) | Writing unit tests with Jest / Vitest |
| [mocks-and-stubs](./mocks-and-stubs/) | Isolating dependencies with mocks, stubs, and spies |

---

## 🛠️ Setup

```bash
npm install --save-dev jest ts-jest @types/jest
```

---

## 📚 Further Reading

- Kent Beck — _Test-Driven Development: By Example_
- Wikipedia — [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development)
