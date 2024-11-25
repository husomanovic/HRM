
const validateEmail = (email) => {
  return String(email).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const createUser = () => {

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const password2 = document.getElementById('password2').value;
  const uloga = document.getElementById('uloga').value
  const regex = /^(?=.*[!@#$%^&*()\-+=,.<>?])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if((firstName === "" || lastName === "" || email === "" || password === "" || password2 === "" || uloga === "" )){
    alert('Nisu popunjena sva polja');
    return
  }

  if (password !== password2) {
    alert('Lozinke se ne podudaraju!');
    return;
  }
  if (!password.match(regex)) {
    alert('Lozinka nije validna! \n Lozinka mora imati najmanje 8 karaktera, jedno veliko slovo, jedno malo slovo, jedan broj i jednu specijalnu karakter.');
    return;
  }if (!validateEmail(email)){
    alert('Email nije validan.');
    return;
  }
  fetch('http://localhost:3000/login/create-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ime: firstName,
      prezime: lastName,
      email: email,
      lozinka: password,
      uloga: uloga
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  // fetch("http://localhost:3000/login")
  // .then((response) => {
  //   // If the response is not 2xx, throw an error
  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }

  //   // If the response is 200 OK, return the response in JSON format.
  //   return response.json();
  // })
  // .then((data) => console.log(data)) // You can continue to do something to the response.
  // .catch((error) => console.error("Fetch error:", error)); // I

}
