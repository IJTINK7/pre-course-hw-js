let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

console.log(passportWithAddress.address.city)
const passportWithAddressCopy = {...passportWithAddress, address: {...passportWithAddress.address, city: "Bobryisk"}}

console.log(passportWithAddressCopy.address.city)
