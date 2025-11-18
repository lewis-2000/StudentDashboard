import { loginUser } from "./auth.js";

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const studentId = document.getElementById("studentId").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!studentId || !password) {
      alert("Please fill in both fields.");
      return;
    }

    // Assume login success
    loginUser(studentId, studentId); // Second param can be name if needed

    window.location.href = "dashboard.html";
  });
});
