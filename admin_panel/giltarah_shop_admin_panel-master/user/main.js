const sidebar = document.querySelector("#sidebar");
const collapseSidebar = document.querySelector("#collapse-sidebar");
const openSidebar = document.querySelector("#open-sidebar");
const themetoggler = document.querySelectorAll("[data-theme-toggle]");

openSidebar.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
});

collapseSidebar.addEventListener("click", () => {
  sidebar.classList.add("hidden");
});

const notificationsBtn = document.querySelector("#notifications-btn");
const notifications = document.querySelector("#notifications");

notificationsBtn.addEventListener("click", () => {
  notifications.classList.toggle("hidden");
});

const dropdownButtons = document.querySelectorAll("[data-dropdown-button]");
const dropdownMenus = document.querySelectorAll("[data-dropdown-menu]");

dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("active");
  });
});

const profileBtn = document.querySelector("[data-profile-btn]");
const profileMenu = document.querySelector("[data-profile-menu]");

profileBtn.addEventListener("click", () => {
  profileMenu.classList.toggle("hidden");
});

document.body.addEventListener("mouseup", (e) => {
  if (
    !notifications.classList.contains("hidden") &&
    !notifications.contains(e.target)
  ) {
    notifications.classList.add("hidden");
  } else if (
    !profileMenu.classList.contains("hidden") &&
    !profileMenu.contains(e.target)
  ) {
    profileMenu.classList.add("hidden");
  }
});

// Actions messages
const closeMessageBtn = document.querySelectorAll("[data-close-message]");
closeMessageBtn.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.remove();
  });
});

const qrModalOpen = document.querySelectorAll("[data-qr-open]");
const qrModalClose = document.querySelectorAll("[data-close-qr-modal]");

qrModalOpen.forEach((button) => {
  button.addEventListener("click", () => {
    button.nextElementSibling.showModal();
  });
});

qrModalClose.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.close();
  });
});
