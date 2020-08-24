console.log("Book keeper work: ", new Date().getMinutes());

const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarksContainer = document.getElementById("bookmarks-container");

let bookmarks = [];

// Show Modal, Focus on Input
function showModal() {
  modal.classList.add("show-modal");
  websiteNameEl.focus();
}
// Modal Event Listeners
modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", () =>
  modal.classList.remove("show-modal")
);
window.addEventListener("click", (e) =>
  e.target === modal ? modal.classList.remove("show-modal") : false
);
// Validate Form
function validate(nameValue, urlValue) {
  let expression = /(https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
  let regex = new RegExp(expression);
  if (!nameValue || !urlValue) {
    alert("Please provide a valid web address");
    return false;
  }
  if (!urlValue.match(regex)) {
    alert("Please provide a valid web address.");
    return false;
  }
  // If valid
  return true;
}

// Handle data from form
function storeBookmark(e) {
  e.preventDefault();
  let nameValue = websiteNameEl.value;
  let urlValue = websiteUrlEl.value;
  if (urlValue.includes("http://", "https://")) {
    urlValue = `https://${urlValue}`;
  }
  // Validate
  if (!validate(nameValue, urlValue)) {
    return false;
  }
  const bookmark = {
    name: nameValue,
    url: urlValue,
  };
  bookmarks.push(bookmark);
  console.log(bookmarks);
  bookmarkForm.reset();
  websiteNameEl.focus();
}

// Event Listener
bookmarkForm.addEventListener("submit", storeBookmark);
