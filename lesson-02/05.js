let passport = {
    name: "Petr",
    surname: "Petrov",
};
const passportCopy = {...passport, name: "Ivan"}
console.log(passport.name)
console.log(passportCopy.name)
