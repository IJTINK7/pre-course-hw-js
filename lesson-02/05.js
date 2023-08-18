let passport = {
    name: "Petr",
    surname: "Petrov",
};
console.log(passport.name)
const passportCopy = {...passport, name: "Ivan"}

console.log(passportCopy.name)
