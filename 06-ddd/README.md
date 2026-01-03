# Domain-Driven Design (DDD)

> "The heart of software is its ability to solve domain-related problems for its users." — Eric Evans

---

## 📖 What is DDD?

**Domain-Driven Design** is a software design approach that focuses on modeling software to match the business domain. It emphasizes collaboration between domain experts and developers to create a shared language and model.

Key idea: the **domain** (business logic) should drive the design of the code, not the other way around.

---

## 📚 Topics

| Folder | Description |
|--------|-------------|
| [building-blocks](./building-blocks/) | **Entity**, **Value Object**, **Aggregate**, **Repository**, **Domain Service** |
| [bounded-contexts](./bounded-contexts/) | How to split a large domain into manageable sub-domains |
| [ubiquitous-language](./ubiquitous-language/) | Shared vocabulary between developers and domain experts |

---

## 🧱 Core Building Blocks

| Concept | Description |
|---------|-------------|
| **Entity** | Has identity that persists over time (e.g., a `User` with an `id`) |
| **Value Object** | Defined by its value, not identity (e.g., `Money`, `Address`) |
| **Aggregate** | Cluster of entities/value objects with one root |
| **Repository** | Abstraction to retrieve/persist aggregates |
| **Domain Service** | Business logic that doesn't belong to a single entity |
| **Domain Event** | Something that happened in the domain (e.g., `OrderPlaced`) |

---

## 📚 Further Reading

- Eric Evans — _Domain-Driven Design: Tackling Complexity in the Heart of Software_
- Vaughn Vernon — _Implementing Domain-Driven Design_
- Wikipedia — [Domain-driven design](https://en.wikipedia.org/wiki/Domain-driven_design)
