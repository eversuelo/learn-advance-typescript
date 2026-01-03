// ❌ Code Smell: Violates the Open-Closed Principle (OCP)
// Every time a new customer type is added, this class must be modified.
// Modifying existing code risks breaking behavior that already works.

class DiscountService {
  getDiscount(customerType: string): number {
    if (customerType === 'regular') return 5;
    if (customerType === 'premium') return 15;
    if (customerType === 'vip') return 30;
    // ❌ adding 'superVip' means editing this method again
    return 0;
  }
}

// Example usage
const discountService = new DiscountService();
console.log('Regular discount:', discountService.getDiscount('regular'));   // 5
console.log('Premium discount:', discountService.getDiscount('premium'));   // 15
console.log('VIP discount:',     discountService.getDiscount('vip'));       // 30

export {};
