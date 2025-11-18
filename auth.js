/* ===============================
   auth.js
   Handles login, logout, and auth checks
================================= */

// KEY name used in localStorage
const AUTH_KEY = "student_session";

/* ------------------------------
    Save user session to localStorage
----------------------------------- */
export function loginUser(studentId, studentName) {
  const session = {
    studentId,
    studentName,
    loginTime: Date.now(),
  };

  localStorage.setItem(AUTH_KEY, JSON.stringify(session));
}

/* ------------------------------
    Clear saved session
----------------------------------- */
export function logoutUser() {
  localStorage.removeItem(AUTH_KEY);
  window.location.href = "login.html"; // redirect after logout
}

/* ------------------------------
    Get currently logged-in user
----------------------------------- */
export function getUser() {
  const data = localStorage.getItem(AUTH_KEY);
  return data ? JSON.parse(data) : null;
}

/* ------------------------------
    Require login on protected pages
----------------------------------- */
export function requireAuth() {
  const user = getUser();
  if (!user) {
    window.location.href = "login.html";
  }
}

/* ------------------------------
    OPTIONAL: Check if logged in
----------------------------------- */
export function isLoggedIn() {
  return !!getUser();
}
