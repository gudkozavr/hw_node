export abstract class Account {
  constructor(protected balance: number) {}
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
  getBalance(): number {
    return this.balance;
  }
}
