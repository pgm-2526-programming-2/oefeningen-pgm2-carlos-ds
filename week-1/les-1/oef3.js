// Schrijf een functie die een boolean omvormt naar de string “true” of “false”
// e.g. true -> "true"
// false -> "false"
function booleanToString(value) {
    if (value === true) {
        return "true";
    } else {
        return "false";
    }
}

function booleanToString3(value) {
    if (value) {
        return "true";
    } else {
        return "false";
    }
}

function booleanToString4(value) {
    return value.toString();
}

console.log(booleanToString3(""));

