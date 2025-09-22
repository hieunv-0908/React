"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    accountNumber;
    balance;
    history;
    status;
    constructor(balance) {
        this.accountNumber = 5;
        this.balance = balance;
        this.history = [];
        this.status = false;
    }
    deposit(money) {
        this.balance += money;
        this.history.push(`+${money}`);
        console.log(`Nạp tiền thành công`);
    }
    withdraw(moneyDraw) {
        if (this.balance - moneyDraw !== 0) {
            console.log(`Tài khoản của bạn không đủ để thực hiện giao dịch này`);
        }
        else {
            console.log(`Rút tiền thành công`);
            this.balance -= moneyDraw;
            this.history.push(`-${moneyDraw}`);
        }
    }
    showHistory() {
        this.history.forEach(gg => { console.log(gg); });
    }
}
class SavingAccount extends Account {
    interestRate;
    constructor(interesRate, balance) {
        super(balance);
        this.interestRate = interesRate;
    }
}
class CheckingAccount extends Account {
    overdraftLimit;
    constructor(overdraftLimit, balance) {
        super(balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(moneyDraw) {
        if (this.balance - moneyDraw > this.overdraftLimit) {
            console.log(`Tài khoản của bạn không đủ để thực hiện giao dịch này`);
        }
        else {
            console.log(`Rút tiền thành công`);
            this.balance -= moneyDraw;
            this.history.push(`-${moneyDraw}`);
        }
    }
}
let sva1 = new SavingAccount(0.5, 100);
sva1.deposit(200);
sva1.withdraw(100);
sva1.showHistory();
let ca1 = new CheckingAccount(-500, 100);
ca1.deposit(200);
ca1.withdraw(800);
ca1.withdraw(800);
ca1.showHistory();
//# sourceMappingURL=baitap8.js.map