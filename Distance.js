const feetToMeters = (feet) => {
    return feet * 0.3048;
}

const metersToFeet = (meters) => {
    return meters * 3.28084;
} 

const milesToKm = (miles) => {
    return miles * 1.60943;
} 

const kmToMiles = (kilometers) => {
    return kilometers * 0.621371;

} 

exports.calculate = (unit, num) => {
    switch (unit) {
        case "feet":
            return feetToMeters(num);
        case "meters":
            return metersToFeet(num);
        case "miles":
            return milesToKm(num);
        case "kilometers":
            return kmToMiles(num);
        default:
            return "Invalid Input";
    }

}



