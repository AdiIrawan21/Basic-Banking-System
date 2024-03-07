class BankAccount {
    constructor() {
        this.balance = 0;
    }

    deposit(amount) {
        setTimeout(() => {
            this.balance += amount;
            alert(`Penyetoran sebesar ${amount} berhasil. Saldo baru: ${this.balance}`);
        }, 2000);
    }

    withdraw(amount) {
        setTimeout(() => {
            if (amount <= this.balance) {
                this.balance -= amount;
                alert(`Penarikan sebesar ${amount} berhasil. Saldo baru: ${this.balance}`);
            } else {
                alert("Saldo tidak mencukupi.");
            }
        }, 2000);
    }
}

const account = new BankAccount();

function tambahSaldo() {
    let amount = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan:")) || 0;
    account.deposit(amount);
}

function kurangiSaldo() {
    let amount = parseFloat(prompt("Masukkan jumlah saldo yang ingin dikurangi:")) || 0;
    account.withdraw(amount);
}
