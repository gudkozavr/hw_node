import { Account } from "./Account";

export class CheckingAccount extends Account {
  private fee: number = 1;
  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposit ${amount}. New balance: ${this.balance}`);
  }
  withdraw(amount: number): void {
    const totalAmount = amount + this.fee;
    if (totalAmount > this.balance) {
      console.log("Insufficient found!");
    } else {
      this.balance -= totalAmount;
      console.log(
        `Withdraw ${amount} with a fee of $${this.fee}. New balance: $${this.balance}`
      );
    }
  }
}
