// --- Get book data from query string ---
const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const author = params.get("author");
const price = params.get("price");
const condition = params.get("condition");
const image = params.get("image");

// --- Update page content ---
document.getElementById("bookName").textContent = name || "Unknown Title";
document.getElementById("bookAuthor").textContent = author || "Unknown Author";
document.getElementById("bookPrice").textContent = price || "$0";
document.getElementById("bookCondition").textContent = condition || "N/A";
document.getElementById("bookImage").src = image || "images/placeholder.jpg";

// Update header title too
document.getElementById("bookTitleHeader").textContent = name || "Book Details";

// --- Tabs functionality ---
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active from all
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(tc => tc.classList.remove("active"));

    // Activate clicked tab
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
