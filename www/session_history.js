const today = new Date().toLocaleDateString();
document.getElementById("session_history_date_entry").innerHTML = today;

let historyList = localStorage.getItem("List");

console.log(historyList[0]);

let ol = document.createElement("ol");

for (i = 0; i < historyList.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = historyList[i];
    ol.appendChild(li);
}

document.getElementById("display").appendChild(ol);