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

// Settings tabs
const tabButtons = document.querySelectorAll("[data-tab-button]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabButtons.forEach((button) => {
      button.classList.remove("active");
    });
    target.classList.add("active");
    button.classList.add("active");
  });
});

// Modals
const modalOpen = document.querySelector("[data-open-modal]");
const modalClose = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

modalOpen.addEventListener("click", () => {
  modal.showModal();
});

modalClose.addEventListener("click", () => {
  modal.close();
});

// LogOut Button 
function handleExit(){
  document.getElementById('exitModal').classList.remove('hidden');
  document.getElementById('sidebar').classList.add('hidden');
}


function handleCancelExit(){
  document.getElementById('exitModal').classList.add('hidden')
 }
 function handleConfirmExit (){
  document.getElementById('exitModal').classList.add('hidden');
  alert('خروج انجام شد!');
 }


function openModal(){
  document.getElementById('addModal').classList.remove('hidden');
}
function closeModal() {
  document.getElementById('addModal').classList.add('hidden');
}

// view Modal

function openView(){
  document.getElementById('viewModal').classList.remove('hidden')
}

function closeBtn(){
          document.getElementById('viewModal').classList.add('hidden')
        }

        