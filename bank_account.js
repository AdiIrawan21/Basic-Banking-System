// deklarasi variabel saldo dengan nilai awal 0
let saldo = 0;

let menu = window.prompt("Menu: \n 1. Tambah saldo\n 2. Kurang Saldo\n 0. Exit")

switch(menu){
    case '1':
        tambahSaldo();
        break;
    case '2':
        kurangiSaldo();
        break;
    case '0':
        break;
    default:
        window.alert("Menu invalid!")
}

let ulang = true;
while (ulang){
    let menu = window.prompt("Menu: \n 1. Tambah saldo\n 2. Kurang Saldo\n 0. Exit")

    switch(menu){
        case '1':
            tambahSaldo();
            break;
        case '2':
            kurangiSaldo();
            break;
        case '0':
            ulang = false;
            break;
        default:
            window.alert("Menu invalid!")
    }
}

// function tambahSaldo()
function tambahSaldo(){
    let tambah = parseFloat(window.prompt('Masukkan jumlah saldo yang ingin ditambahkan : ')) || 0;
    saldo = saldo + tambah;
    window.alert("Saldo saat ini : Rp. " + saldo);
    
}

// function kurangiSaldo()
function kurangiSaldo(){
    let kurang = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin dikurangi : ")) || 0;
    if(kurang <= saldo){
        saldo = saldo - kurang;
        window.alert("Saldo saat ini : Rp. " + saldo)
    } else {
        window.alert("Saldo anda sebelumnya kosong")
    }
}