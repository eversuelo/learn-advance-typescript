// Correct SRP Example: Separate validation and persistence responsibilities

// Validation class – only responsible for validating user data
class UserValidator {
  private emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  isValid(data: { name: string; email: string }): boolean {
    if (!data.name || data.name.length === 0) return false;
    if (!this.emailRegex.test(data.email)) return false;
    return true;
  }
}

// Persistence class – only responsible for saving user data
class UserRepository {
  private storage: Array<{ name: string; email: string }> = [];

  save(data: { name: string; email: string }): void {
    this.storage.push(data);
    console.log('User persisted:', data);
  }
}

// Service class – orchestrates validation and persistence using the two single‑responsibility classes
class UserService {
  private validator = new UserValidator();
  private repository = new UserRepository();

  createUser(data: { name: string; email: string }): void {
    if (!this.validator.isValid(data)) {
      throw new Error('Invalid user data');
    }
    this.repository.save(data);
  }
}

// Example usage
const service = new UserService();
service.createUser({ name: 'Bob', email: 'bob@example.com' });

export {};
