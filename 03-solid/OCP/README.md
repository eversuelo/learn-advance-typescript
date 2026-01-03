# Open-Closed Principle (OCP)

> "Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification." — Bertrand Meyer

---

## 📖 What is OCP?

The **Open-Closed Principle (OCP)**, stated by Bertrand Meyer, recommends that when introducing new behaviors into existing systems, instead of modifying old components, **new components should be created**. The reason is that if those components or classes are being used elsewhere (in the same project or in others), altering them will change their behavior and cause undesired side effects.

In practice this means:

- **Open for extension** — you can add new functionality.
- **Closed for modification** — you don't change existing, tested code to do it.

---

## 🚩 Code Smell Example

[`code-smell.ts`](./code-smell.ts) shows a class that **violates OCP**: every time a new discount type is needed, the existing `DiscountService` must be modified.

```typescript
class DiscountService {
  getDiscount(customerType: string): number {
    if (customerType === 'regular') return 5;
    if (customerType === 'premium') return 15;
    // ❌ Adding "vip" forces us to edit this class
    if (customerType === 'vip') return 30;
    return 0;
  }
}
```

**Problem:** every new customer type requires touching — and potentially breaking — the existing method.

---

## ✅ Correct OCP Implementation

[`open-closed.ts`](./open-closed.ts) uses an abstraction (interface) so that new discount types are added by **extending**, never by **modifying** existing code.

```typescript
interface DiscountStrategy {
  getDiscount(): number;
}

class RegularDiscount implements DiscountStrategy { getDiscount() { return 5; } }
class PremiumDiscount implements DiscountStrategy { getDiscount() { return 15; } }
class VipDiscount    implements DiscountStrategy { getDiscount() { return 30; } }

// ✅ Adding a new type = new class only, zero changes to existing code
class DiscountService {
  constructor(private strategy: DiscountStrategy) {}
  getDiscount(): number { return this.strategy.getDiscount(); }
}
```

Each discount rule lives in its own class. `DiscountService` never needs to change.

---

## ▶️ How to Run the Examples

```bash
# Run the code smell (violates OCP)
npx ts-node code-smell.ts

# Run the correct OCP implementation
npx ts-node open-closed.ts
```

---

## 📚 Further Reading

- Bertrand Meyer — _Object-Oriented Software Construction_
- Robert C. Martin — _Clean Architecture_ (Chapter on OCP)
- Wikipedia — [Open–closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)
