// ✅ Correct DIP Implementation: both high-level and low-level modules depend on an abstraction.
// Swapping the database or injecting a mock for tests requires zero changes to UserService.

// Abstraction (interface) — the contract both sides depend on
interface Database {
  save(data: object): void;
}

// Low-level detail: a real MySQL implementation
class MySQLDatabase implements Database {
  save(data: object): void {
    console.log('Saving to MySQL:', data);
  }
}

// Low-level detail: an in-memory implementation (great for tests)
class InMemoryDatabase implements Database {
  private storage: object[] = [];

  save(data: object): void {
    this.storage.push(data);
    console.log('Saving to memory:', data, '| Total records:', this.storage.length);
  }
}

// High-level module: depends only on the Database abstraction
class UserService {
  constructor(private db: Database) {} // ✅ injected dependency

  createUser(name: string): void {
    this.db.save({ name });
  }
}

// Example usage — swap implementations without touching UserService
const mysqlService    = new UserService(new MySQLDatabase());
const inMemoryService = new UserService(new InMemoryDatabase());

mysqlService.createUser('Alice');    // Saving to MySQL
inMemoryService.createUser('Bob');   // Saving to memory

export {};
