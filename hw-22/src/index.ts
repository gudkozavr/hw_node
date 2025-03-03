import { capitalize, reverseString } from "./stringUtils";
import { Finance } from "./finance";
import { fibonacci, prime } from "./sequenceUtils";
import { UserManagement } from "./userManagement";
console.log(capitalize("jdjdjd"));
console.log(reverseString("): ifful"));

const loan = new Finance.LoanCalculator(100000, 5, 24);
const tax = new Finance.TaxCalculator(55000, 30);

console.log("Monthly payment: ", loan.calculateMonthlyPayment());
console.log("Tax: ", tax.calculateTax());

const user = new UserManagement.Admin.AdminUser(
  "anastasiia",
  "anastasiia@mail.com",
  true
);
user.switchAdminPermissions();
console.log(user.getIsSuperAdmin());
user.switchAdminPermissions();
console.log(user.getIsSuperAdmin());

console.log(fibonacci(6));

console.log(prime(10));
