export namespace Finance {
  export class LoanCalculator {
    private loanAmount: number;
    private annualInterestRate: number;
    private loanTermYears: number;

    constructor(
      loanAmount: number,
      annualInterestRate: number,
      loanTermYears: number
    ) {
      this.loanAmount = loanAmount;
      this.annualInterestRate = annualInterestRate;
      this.loanTermYears = loanTermYears;
    }

    calculateMonthlyPayment(): number {
      const monthlyInterestRate = this.annualInterestRate / 100 / 12;
      const numberOfPayment = this.loanTermYears * 12;

      if (monthlyInterestRate === 0) {
        return this.loanAmount / numberOfPayment;
      }

      return (
        (this.loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayment))
      );
    }
  }

  export class TaxCalculator {
    private income: number;
    private taxRate: number;

    constructor(income: number, taxRate: number) {
      this.income = income;
      this.taxRate = taxRate;
    }

    calculateTax(): number {
      return (this.income * this.taxRate) / 100;
    }
  }
}
