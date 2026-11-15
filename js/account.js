
const accountTabs = document.querySelectorAll(".account-tab");
const accountPanels = document.querySelectorAll(".tab-panel");

function openAccountTab(tabName) {
  accountTabs.forEach(button => {
    const isActive = button.dataset.tab === tabName;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
  });

  accountPanels.forEach(panel => {
    const isActive = panel.id === `tab-${tabName}`;
    panel.hidden = !isActive;
    panel.classList.toggle("active", isActive);
  });
}

accountTabs.forEach(button => {
  button.addEventListener("click", () => {
    openAccountTab(button.dataset.tab);
  });
});

// Открытие нужного раздела через ссылку вида:
// account.html?tab=applications

const params = new URLSearchParams(window.location.search);
const requestedTab = params.get("tab");

const availableTabs = [
  "overview",
  "profile",
  "applications",
  "orders",
  "favorites",
  "notifications",
  "security"
];

if (availableTabs.includes(requestedTab)) {
  openAccountTab(requestedTab);
}
