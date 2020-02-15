function akan() {

  const male = ["Kwasi","Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi","Kwame"]
  const female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
  
    
  var DD = parseInt(document.getElementById("date").value)
  var MM = parseInt(document.getElementById("month").value)
  var YY = parseInt(document.getElementById("year").value)
    
  var man = document.getElementById("maleb")
  var woman = document.getElementById("femaleb")
  
  var name = new Date(MM + '/' + DD + '/'+ YY).getDay()
  
  //alert(name)
  
  if (name === 0 && woman.checked){
    alert("You were born on " + days[0] + "," + " and your Akan name is " + female[0] + ".")
  } else if(name === 3 && woman.checked){
    alert("You were born on " + days[0] + "," + " and your Akan name is " + female[0] + ".")
  } else if(name === 1 && woman.checked){
    alert("You were born on " + days[0] + "," + " and your Akan name is " + female[0] + ".")
  } else if (name === 0 && woman.checked){
    alert("You were born on " + days[0] + "," + " and your Akan name is " + female[0] + ".")
  } else if (name === 5 && woman.checked){
    alert("You were born on " + days[0] + "," + " and your Akan name is " + female[0] + ".")
  } else if (name === 2 && woman.checked) {
    alert("You were born on " + days[0] + "," + " and your Akan name is " + female[0] + ".")
  } else if (name === 6 && woman.checked){
    alert("You were born on " + days[0] + "," + " and your Akan name is " + female[0] + ".")
  }
  
  if (name === 0 && man.checked){
    alert("You were born on " + days[0] + "," + " and your Akan name is " + male[0] + ".")
  } else if(name === 1 && man.checked){
    alert("You were born on " + days[1] + "," + " and your Akan name is " + male[1] + ".")
  } else if(name === 2 && man.checked){
    alert("You were born on " + days[2] + "," + " and your Akan name is " + male[2] + ".")
  } else if (name === 3 && man.checked){
    alert("You were born on " + days[3] + "," + " and your Akan name is " + male[3] + ".")
  } else if (name === 4 && man.checked){
    alert("You were born on " + days[4] + "," + " and your Akan name is " + male[4] + ".")
  } else if (name === 5 && man.checked) {
    alert("You were born on " + days[5] + "," + " and your Akan name is " + male[5] + ".")
  } else if (name === 6 && man.checked){
    alert("You were born on " + days[6] + "," + " and your Akan name is " + male[6] + ".")
  }
  
}
  
  