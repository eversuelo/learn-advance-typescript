# SOLID Principles in TypeScript

A practical guide to the five SOLID design principles with TypeScript examples. Each principle includes a **code smell** (violation) and a **correct implementation**.

---

## 📚 What is SOLID?

**SOLID** is an acronym for five object-oriented design principles that together produce software that is easier to maintain, extend, and understand.

| Letter | Principle | Author |
|--------|-----------|--------|
| **S** | [Single Responsibility Principle](./SRP/README.md) | Robert C. Martin |
| **O** | [Open-Closed Principle](./OCP/README.md) | Bertrand Meyer |
| **L** | [Liskov Substitution Principle](./LSP/README.md) | Barbara Liskov |
| **I** | [Interface Segregation Principle](./ISP/README.md) | Robert C. Martin |
| **D** | [Dependency Inversion Principle](./DIP/README.md) | Robert C. Martin |

---

## 🗂️ Structure

Each principle folder contains:

```
<PRINCIPLE>/
├── README.md              # Explanation, examples, how to run
├── code-smell.ts          # ❌ Violates the principle
└── <principle-name>.ts    # ✅ Correct implementation
```

---

## ▶️ Running Examples

```bash
# Example for any principle file
npx ts-node SRP/code-smell.ts
npx ts-node SRP/single-responsibility.ts
```

---

## 📚 Further Reading

- Robert C. Martin — _Clean Architecture_
- Robert C. Martin — _Agile Software Development, Principles, Patterns, and Practices_
- Wikipedia — [SOLID](https://en.wikipedia.org/wiki/SOLID)
