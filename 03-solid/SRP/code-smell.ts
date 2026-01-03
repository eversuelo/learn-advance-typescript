// ❌ Code Smell: Violates the Single Responsibility Principle (SRP)
// This class has TWO responsibilities: validation and persistence.
// If validation logic changes, we risk breaking the save logic too.

class UserServiceSmell {
  // Validates user data
  validateUser(data: { name: string; email: string }): boolean {
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!data.name || data.name.length === 0) return false;
    if (!emailRegex.test(data.email)) return false;
    return true;
  }

  // Persists user data to a mock storage (e.g., in‑memory array)
  saveUser(data: { name: string; email: string }): void {
    if (!this.validateUser(data)) {
      throw new Error('Invalid user data');
    }
    // Imagine this writes to a database
    console.log('User saved:', data);
  }
}

// Example usage
const smellService = new UserServiceSmell();
smellService.saveUser({ name: 'Alice', email: 'alice@example.com' });

export {};
