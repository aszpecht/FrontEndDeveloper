const day = new Date();

switch (day) {
    case 0:
        console.log("Niedziela");
        break;
    case 1:
        console.log("Wtorek");
        break;
    case 2:
        console.log("Środa");
        break;
    case 3:
            console.log("Czwartek");
            break;
    case 4:
            console.log("Piątek");
            break;
    case 5:
            console.log("Sobota");
            break;
    case 6:
            console.log("Niedziela");
            break;
    default:
        console.log("nieznany");
        break;
}

var dane = `Ania, witaj w + ${day.getDay()}`;
console.log(dane);