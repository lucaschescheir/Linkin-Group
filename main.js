//
fetch('https://api.linkedin.com/v1/people/~?format=json')
.then(function(response){
  response.json().then(function(data) {
    console.log(data);
  });
});
let handler;
var xhr = new XMLHttpRequest();
var url = 'https://api.linkedin.com/v1/people/~?format=json';

xhr.open('GET', url, true);
xhr.onreadystatechange = handler;
xhr.send();
