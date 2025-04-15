const form = document.getElementById("adminLogin");
const tokenBox = document.getElementById("tokenDisplay");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;

  const response = await fetch("/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (data.token) {
    tokenBox.textContent = "Token : " + data.token;
    tokenBox.classList.remove("hidden");
  } else {
    tokenBox.textContent = "Connexion échouée.";
    tokenBox.classList.remove("hidden");
  }
});
