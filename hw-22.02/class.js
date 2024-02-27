class BankAccount {
    #balance = 0;
    #transactionHistory = [];

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        this.#balance += amount;
        this.#transactionHistory.push(`Депозит: ${amount}`);
    }

    withdraw(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;
            this.#transactionHistory.push(`Снятие: ${amount}`);
        } else {
            console.log("Ошибка: Недостаточно средств на счету.");
        }
    }

    printTransactionHistory() {
        for (const transaction of this.#transactionHistory) {
            console.log(transaction);
        }
    }
}

let account = new BankAccount();
account.deposit(100);
account.withdraw(50);
account.deposit(200);
console.log("Текущий баланс:", account.balance); // Должно вывести 250
account.printTransactionHistory();


// Должно вывести:
// Депозит: 100
// Снятие: 50
// Депозит: 200


// 2.Создайте дочерний класс SavingsAccount, который наследует функциональность BankAccount и добавляет функциональность начисления процентов. У него должны быть:
// Приватное сво-во interestRate (число), которое задают процетное вознаграждение на остаток на балансе. Данное сво-во должно хранить значение процента (если 5%, то 0.05, 10% - 0.1  и тд) 
// Метод calculateInterest(), который должен будет рассчитать и поместить в депозит денежное вознаграждение. Также метод должен вывести сообщение с информацией фактического денежного вознаграждения

// Пример использования:

// let savingsAccount = new SavingsAccount(0.05); // Процентная ставка 5%
// savingsAccount.deposit = 1000;
// savingsAccount.withdraw = 200;
// savingsAccount.deposit = 500;
// savingsAccount.calculateInterest();
// console.log("Текущий баланс:", savingsAccount.balance);
// savingsAccount.printTransactionHistory();


class SavingsAccount extends BankAccount {
    #interestRate;

    constructor(interestRate) {
        super();
        this.#interestRate = interestRate;
    }

    calculateInterest() {
        const interest = this.#balance * this.#interestRate;
        this.#balance += interest;
        this.#transactionHistory.push(`Начисление процентов: ${interest}`);
        console.log("Начислено процентов:", interest);
    }
}

let savingsAccount = new SavingsAccount(0.05); // Процентная ставка 5%
savingsAccount.deposit(1000);
savingsAccount.withdraw(200);
savingsAccount.deposit(500);
savingsAccount.calculateInterest();
console.log("Текущий баланс:", savingsAccount.balance);
savingsAccount.printTransactionHistory();
