/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}
/* we create an account.deposite prototype then pass amount as its parameter then create a variable that holds new Transaction
amount then check if the amount is an integer if it is then push it to the transactions array */
Account.prototype.deposit = function (amount) {
  if ((Number.isInteger(amount)) && (amount > 0)) {
    var newDeposit = new Transaction('deposit', amount);
    this.transactions.push(newDeposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if ((Number.isInteger(amount)) && (amount > 0)) {
    var newWithDraw = new Transaction('withdrawal', amount);
    this.transactions.push(newWithDraw);
    return true;
  } else {
    return false;
  }
};
/* first we create an account prototype function
that function holds an empty parameter
inside the function we create a variable that holds all deposits and all withdrawals and subtract deposit from withdrawal
after that we check and see if the balance is an integer number of if the balance is greater then 0
if it is then we return the balance if its not then we return 0. */

Account.prototype.getBalance = function () {
  var totalBalance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      totalBalance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      totalBalance -= this.transactions[i].amount;
    }
  }
  return totalBalance;
};
