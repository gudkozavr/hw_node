import { Account } from "./Account";

export class SavingAccount extends Account {
  constructor(balance: number) {
    super(balance);
  }
  deposit(amount: number): void {
    this.balance += amount;
    console.log(`new balance: ${this.balance} `);
  }
  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("not enough money on balance");
    } else {
      this.balance -= amount;
      console.log(`new balance: ${this.balance} `);
    }
  }
  applyInterest(): void {
    const interest = this.balance * 0.1;
    this.balance += interest;
    console.log(`your interest: ${interest}, new balance: ${this.balance}`);
  }
}
