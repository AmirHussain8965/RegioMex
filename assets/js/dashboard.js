const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const dashMain = document.querySelector('.dash_main');

function handleSidebarToggle() {
  sidebar.classList.toggle('active');
}

// Toggle manually on button click
toggleBtn.addEventListener('click', handleSidebarToggle);

// Automatically activate sidebar on small screens
function handleResize() {
  if (window.innerWidth <= 992) {
    sidebar.classList.add('active');
  } else {
    sidebar.classList.remove('active');
  }
}

// Run once on load
handleResize();

// Run on every resize
window.addEventListener('resize', handleResize);

// Messages_Page_JS =================================================

document.addEventListener("DOMContentLoaded", () => {
  const mailList = document.querySelector(".mail_list");
  const selectAll = document.getElementById("select_all");
  const refreshBtn = document.querySelector(".btn_refresh");
  const toggleBtn = document.querySelector(".mail_toggle_btn");
  const sidebar = document.querySelector(".mail_sidebar");

  // Example email data
  const emails = Array.from({ length: 20 }).map(() => ({
    sender: "Leslie Alexander",
    subject: "<span>Thema</span> - Velit amtiere Konsequenz Duis Enim Velit Mollit. ÜBUNG VELIT",
    time: "22.41 Uhr",
  }));

  // Render emails
  function renderEmails() {
    mailList.innerHTML = "";
    emails.forEach(mail => {
      const item = document.createElement("div");
      item.className = "mail_list_item";
      item.innerHTML = `
        <div class="mail_list_item_inner1">
            <input type="checkbox" class="mail_checkbox">
            <img src="../assets/img/Star.svg" class="mail_star" alt="">
            <img src="../assets/img/importan.svg" class="mail_star" alt="">
            <div class="mail_sender">${mail.sender}</div>
        </div>
        <div class="mail_subject text-truncate">${mail.subject}</div>
        <div class="mail_time">${mail.time}</div>
      `;
      mailList.appendChild(item);
    });
  }

  renderEmails();

  // Select All functionality
  selectAll.addEventListener("change", e => {
    document.querySelectorAll(".mail_checkbox").forEach(cb => {
      cb.checked = e.target.checked;
    });
  });

  // Refresh animation
  refreshBtn.addEventListener("click", () => {
    refreshBtn.classList.add("rotate");
    setTimeout(() => {
      refreshBtn.classList.remove("rotate");
      renderEmails();
    }, 600);
  });

  // Sidebar toggle button
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });

  // Auto close sidebar when screen width ≤ 992px
  function handleResponsiveSidebar() {
    if (window.innerWidth <= 992) {
      sidebar.classList.add("close");
    } else {
      sidebar.classList.remove("close");
    }
  }

  // Run on load + resize
  handleResponsiveSidebar();
  window.addEventListener("resize", handleResponsiveSidebar);
});
