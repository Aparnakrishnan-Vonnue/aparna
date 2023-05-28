let email = "test@example.com";

function ifValidEmail() {
  let prefix = [];
  let domain = []
  let startingPosition = 0;
  let endingPosition = 0;
  let indicator = 0
  for (let i = 0; i < email.length; i++) {
    if (email[i] === " " || email[i] === "@") {
        startingPosition = indicator
        endingPosition = i 
        prefix.push(email.slice(startingPosition, endingPosition))
        return prefix
    }
  }
}

console.log(ifValidEmail(email))
