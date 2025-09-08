// --- Browse Button Alert ---
const browseBtn = document.querySelector(".browse-btn button");

if (browseBtn) {
  browseBtn.addEventListener("click", () => {
    alert("Redirecting to Fiction Bestsellers!");
    // Later you can replace this with:
    // window.location.href = "fiction.html";
  });
}

// --- Book Click Logic (redirect to details.html) ---
const books = document.querySelectorAll('.book');

books.forEach(book => {
  book.addEventListener('click', () => {
    // Collect book data
    const name = book.dataset.name;
    const author = book.dataset.author;
    const price = book.dataset.price;
    const condition = book.dataset.condition;
    const image = book.dataset.image;

    // Redirect with query params
    const url = `details.html?name=${encodeURIComponent(name)}&author=${encodeURIComponent(author)}&price=${encodeURIComponent(price)}&condition=${encodeURIComponent(condition)}&image=${encodeURIComponent(image)}`;
    
    window.location.href = url;
  });
});
