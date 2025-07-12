function approve(button) {
    const row = button.closest("tr");
    row.querySelector(".status").textContent = "Approved";
    row.querySelector(".status").className = "status approved";
}

function reject(button) {
    const row = button.closest("tr");
    row.querySelector(".status").textContent = "Rejected";
    row.querySelector(".status").className = "status rejected";
}