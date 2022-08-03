const today = new Date().toLocaleDateString();
document.getElementById("session_history_date_entry").innerHTML = today;

let historyList = localStorage.getItem("List");

let ol = document.createElement("ol");

let li = document.createElement("li");
li.innerHTML = historyList;
ol.appendChild(li);

document.getElementById("display").appendChild(ol);