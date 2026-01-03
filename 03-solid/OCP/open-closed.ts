// ✅ Correct OCP Implementation: Open for extension, closed for modification.
// To add a new discount type, just create a new class — no existing code is touched.

interface DiscountStrategy {
  getDiscount(): number;
}

class RegularDiscount implements DiscountStrategy {
  getDiscount(): number {
    return 5;
  }
}

class PremiumDiscount implements DiscountStrategy {
  getDiscount(): number {
    return 15;
  }
}

class VipDiscount implements DiscountStrategy {
  getDiscount(): number {
    return 30;
  }
}

// ✅ Adding a new type only requires creating a new class below — nothing above changes.
class SuperVipDiscount implements DiscountStrategy {
  getDiscount(): number {
    return 50;
  }
}

// Orchestrator: depends on the abstraction, not on concrete implementations
class DiscountService {
  constructor(private strategy: DiscountStrategy) {}

  getDiscount(): number {
    return this.strategy.getDiscount();
  }
}

// Example usage
const regularService  = new DiscountService(new RegularDiscount());
const premiumService  = new DiscountService(new PremiumDiscount());
const vipService      = new DiscountService(new VipDiscount());
const superVipService = new DiscountService(new SuperVipDiscount());

console.log('Regular discount:   ', regularService.getDiscount());    // 5
console.log('Premium discount:   ', premiumService.getDiscount());    // 15
console.log('VIP discount:       ', vipService.getDiscount());        // 30
console.log('Super VIP discount: ', superVipService.getDiscount());   // 50

export {};
