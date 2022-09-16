function checkPalindrom(str) {
  let bag = ""

  for (let i = str.length - 1; i>= 0; i--) {


    bag = bag + str[i];
  }

  if (bag == str) {
    return "Palindrom"
  } else {
return "Not Pallindrom"
  }
}