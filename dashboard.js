import { requireAuth, getUser, logoutUser } from "./auth.js";

window.addEventListener("DOMContentLoaded", () => {
  // Redirect if not logged in
  requireAuth();

  const user = getUser();

  document.getElementById(
    "studentDisplay"
  ).textContent = `${user.studentId} - ${user.studentName}`;

  document.getElementById("logoutBtn").addEventListener("click", () => {
    logoutUser();
  });
});
