const person = {
    name: 'Jack William',
    age: 17,
    job: 'Facebooker',
    gfName: 'Emma Watson',
    address: 'Kochukhet',
    phone: '01717112211',
    friends: ['Tom', 'Henry']
}

// Way to access object property
const address = person.address;
const phone = person.phone;

const { friends, age } = person;

const complexObject = {
    name: 'Abc',
    info: {
        address: 'Kolabagan',
        leader: 'Tiger'
    }
}

const { leader } = complexObject.info;

console.log(leader);

console.log(address, phone, friends, age);

// Array destructure

const friend = ['Name', 'Name1', 'Name2', 'Name3', 'Name4'];

const [first, second, ...rest] = friend;

console.log(rest)
