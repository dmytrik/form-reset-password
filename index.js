const url = "http://127.0.0.1:8000/api/v1/accounts/reset-password/complete/";
const form = document.querySelector(".reset-password-form")

form.addEventListener("submit", exchangePassword)

async function exchangePassword (event) {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const token = event.currentTarget.token.value;
    const password = event.currentTarget.password.value;
    const confirmPassword = event.currentTarget.repeated_password.value;
    if (!email || !token || !password || !confirmPassword ) {
        alert("Enter all data!")
        return
    } 
    if (password !== confirmPassword) {
        alert("Wrong Password");
        return
    }
    try {
        data = {
            "email": email,
            "password": password,
            "token": token
        }
        form.reset()
        const response = await fetch(url, {
          method: "POST", 
          body: JSON.stringify(data), 
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        console.log("Success:", JSON.stringify(json));
      } catch (error) {
        console.error("Error:", error);
      }
}
