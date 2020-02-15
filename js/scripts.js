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
  }

}