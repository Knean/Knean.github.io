var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/amx_50.jpg') {
      myImage.setAttribute ('src','images/amx_13.jpg');
    } else {
      myImage.setAttribute ('src','images/amx_50.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'You have no chance, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'You have no chance, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}