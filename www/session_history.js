const today = new Date().toLocaleDateString();
document.getElementById("session_history_date_entry").innerHTML = today;

if (localStorage.length !== 0) {

    let ol = document.createElement("ol");

    for (let i=0; i < localStorage.length; ++i) {
        let li = document.createElement("li");
        li.innerHTML = localStorage[i];
        ol.appendChild(li);
    }
    
    document.getElementById("display").appendChild(ol);
}