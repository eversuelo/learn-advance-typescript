# Dependency Inversion Principle (DIP)

> "High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions." — Robert C. Martin

---

## 📖 What is DIP?

The **Dependency Inversion Principle** states that high-level business logic should not be tightly coupled to low-level implementation details (like a specific database, email service, or HTTP client). Instead, both should depend on an **abstraction** (interface). This makes it easy to swap implementations without touching business logic.

Breaking DIP leads to:
- Business logic that breaks when you change a database or third-party service
- Code that is nearly impossible to unit test without real infrastructure
- High coupling between layers of the application

---

## 🚩 Code Smell Example

[`code-smell.ts`](./code-smell.ts) shows a `UserService` that directly instantiates a concrete `MySQLDatabase`, making it impossible to swap the database or test without a real DB connection.

```typescript
class MySQLDatabase {
  save(data: object): void { console.log('Saving to MySQL:', data); }
}

class UserService {
  private db = new MySQLDatabase(); // ❌ tightly coupled to MySQL

  createUser(name: string): void {
    this.db.save({ name });
  }
}
```

---

## ✅ Correct DIP Implementation

[`dependency-inversion.ts`](./dependency-inversion.ts) introduces an abstraction so `UserService` works with any database — MySQL, Postgres, in-memory, or a mock in tests.

```typescript
interface Database {
  save(data: object): void;
}

class MySQLDatabase implements Database { ... }
class InMemoryDatabase implements Database { ... }  // ✅ great for tests

class UserService {
  constructor(private db: Database) {}  // ✅ depends on abstraction

  createUser(name: string): void {
    this.db.save({ name });
  }
}
```

---

## ▶️ How to Run the Examples

```bash
npx ts-node code-smell.ts
npx ts-node dependency-inversion.ts
```

---

## 📚 Further Reading

- Robert C. Martin — _Clean Architecture_ (Chapter on DIP)
- Wikipedia — [Dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)
