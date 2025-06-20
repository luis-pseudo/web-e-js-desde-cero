const { z } = window.Zod;

const schema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres."),
  email: z.string().email(),
  password: z.string().min(5, "la contraseña debe tener al menos 5 caracteres").regex(/^[a-zA-Z0-9]+$/, "solo caracteres alfanumericos")
});

const form = document.getElementById("form");
const nameInp = document.getElementById("name");
const emailInp = document.getElementById("email");
const passwordInp = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    name: nameInp.value.trim(),
    email: emailInp.value,
    password: passwordInp.value,
  }; 

  const result = schema.safeParse(formData);

  if (result.success) {
    alert("usuario reguistrado\n"+JSON.stringify(formData, null, 3))
    form.reset()
    errorMessage.textContent=""
  } else {
    errorMessage.textContent = result.error.issues.map((issue) => issue.message).join(', ');
  }
});
