function decimal2Hexadecimal(decimal) {
  let hexadecimal = "";
  while (decimal > 0 || hexadecimal === "") {
    let remainder = decimal % 16;
    if (remainder < 10) {
      hexadecimal = remainder + hexadecimal;
    } else {
      hexadecimal = String.fromCharCode(55 + remainder) + hexadecimal;
    }
    decimal = Math.floor(decimal / 16);
  }
  return "0x" + hexadecimal;
}

function isDateValid(date) {
  if (date == null || date === undefined) {
    return false;
  }
  return !Number.isNaN(new Date(date).valueOf());
}