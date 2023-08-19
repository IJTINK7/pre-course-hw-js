const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

console.log((Boolean(words.indexOf("апельсин", 0) === -1) ?  console.log("Придется поискать в другом магазине…") : console.log("Ура! нашел")))
