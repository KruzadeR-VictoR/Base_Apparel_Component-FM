// function ValidateEmail(){
//     email= document.getElementById("email").value;
//     function isEmpty(email){
//         return (email === undefined || email == null || email.length <= 0) ? true : false;
//         exit();
//     }

// }
const inputText = document.querySelector("#email");
const error = document.querySelector(".input-group");

const callFunc = (e) => {
  if (e.key == "Enter") {
    ValidateEmail();
  }
};

function ValidateEmail() {
  console.log(inputText.value);
  if (
    inputText.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    location.reload();
    error.classList.remove("active");
  } else {
    error.classList.add("active");
  }
}
