const totalNotifications = document.querySelector(".total-notifications");
const notificationElements = document.querySelectorAll(".notification");

function updateUnreadMessages() {
  let unreadElements = document.querySelectorAll(".unread");
  totalNotifications.textContent = unreadElements.length;
}

updateUnreadMessages();

notificationElements.forEach((element) => {
  element.addEventListener("click", function () {
    this.classList.toggle("unread");
    updateUnreadMessages();
  });
});

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  notificationElements.forEach((element) => element.classList.remove("unread"));
  updateUnreadMessages();
});
