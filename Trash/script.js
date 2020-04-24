console.log('Hello World');

const option = 'uendel';

let paymentsAdded;

switch (option) {
    case 'uendel':
        paymentsAdded = {
            idade: 25,
            altura: 1.80,
            nacionalidade: 'brasileiro'
        }
        break;
    case 'Tafarel':
        paymentAdded = {
            jogo: 10,
            elo: 'gold',
            champ: 'Lux'
        }
        break;
    default:
        break;
}

paymentsAdded = {
    ...paymentsAdded,
    city: 'Brazil',
    state: 'Bahia',
}

console.log(paymentsAdded);