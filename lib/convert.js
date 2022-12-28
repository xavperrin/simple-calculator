function decimalToHexadecimal(decimal) {
    let hexadecimal = "";
    while (decimal > 0) {
      let remainder = decimal % 16;
      if (remainder < 10) {
        hexadecimal = remainder + hexadecimal;
      } else {
        hexadecimal = String.fromCharCode(55 + remainder) + hexadecimal;
      }
      decimal = Math.floor(decimal / 16);
    }
    return hexadecimal;
  }