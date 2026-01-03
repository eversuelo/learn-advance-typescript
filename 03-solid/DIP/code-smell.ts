// ❌ Code Smell: Violates the Dependency Inversion Principle (DIP)
// UserService directly instantiates MySQLDatabase — tightly coupled to a concrete implementation.
// Cannot be unit tested without a real database; swapping DB requires changing business logic.

class MySQLDatabase {
  save(data: object): void {
    // Imagine this connects to a real MySQL instance
    console.log('Saving to MySQL:', data);
  }
}

class UserService {
  private db = new MySQLDatabase(); // ❌ depends on a concrete low-level detail

  createUser(name: string): void {
    this.db.save({ name });
  }
}

// Example usage
const userService = new UserService();
userService.createUser('Alice');

export {};
