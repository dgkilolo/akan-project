var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

var DD = document.getElementById('date')
var MM = document.getElementById('month')
var YY = document.getElementById('year')

var man = document.getElementById('male-checkbox')
var woman = document.getElementById('female-checkbox')

akan(); {
  var answer = new Date(DD+'/'+MM+'/'+YY).getDay()

  if (answer == 0 && man.checked) {
    alert("You were born on " + days[0] + "," + "and your Akan name is " + male[0] + ".")
  } else if (answer == 1 && man.checked) {
    alert("You were born on " + days[1] + "," + "and your Akan name is " + male[1] + ".")
  } else if (answer == 2 && man.checked) {
    alert("You were born on " + days[2] + "," + "and your Akan name is " + male[2] + ".")
  } else if (answer == 3 && man.checked) {
    alert("You were born on " + days[3] + "," + "and your Akan name is " + male[3] + ".")
  } else if (answer == 4 && man.checked) {
    alert("You were born on " + days[4] + "," + "and your Akan name is " + male[4] + ".")
  } else if (answer == 5 && man.checked) {
    alert("You were born on " + days[5] + "," + "and your Akan name is " + male[5] + ".")
  } else if (answer == 6 && man.checked) {
    alert("You were born on " + days[6] + "," + "and your Akan name is " + male[6] + ".")
  }

}