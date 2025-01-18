// Toggle class active Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");

//Toggle class active Shopping Cart
const shoppingCart = document.querySelector(".shopping-cart");

// Toggle class active Search Form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Ketika Shopping Cart di klik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
};

// Klik di luar elemen untuk menutup
const hamburger = document.querySelector("#hamburger-menu");
const search = document.querySelector("#search-button");
const cart = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!cart.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Box Detail
const itemDetail = document.querySelector("#item-detail");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

itemDetailButton.forEach((button) => {
  button.onclick = (e) => {
    itemDetail.style.display = "flex";
    e.preventDefault();
  };
});

// Klik Tombol Close
document.querySelector(".item-detail .close-icon").onclick = (e) => {
  itemDetail.style.display = "none";
  e.preventDefault;
};

// Klik diluar item detail
window.onclick = (e) => {
  if (e.target === itemDetail) {
    itemDetail.style.display = "none";
  }
};
