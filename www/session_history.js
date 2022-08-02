const today = new Date().toLocaleDateString();
document.getElementById("session_history_date_entry").innerHTML = today;

let test = localStorage.getItem("0");
document.getElementById("history").innerHTML = test;