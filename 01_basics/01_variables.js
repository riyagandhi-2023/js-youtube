const accountId = 144553;
let accountEmail = "riya@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2 //not allowed

accountEmail = "rg@rg.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
