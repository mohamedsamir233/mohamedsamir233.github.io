const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filterValue = button.dataset.filter;

    galleryItems.forEach((item) => {
      if (filterValue === "all" || item.classList.contains(filterValue)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

const themeBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // تغيير شكل الأيقونة
  if (body.classList.contains('dark-theme')) {
    themeBtn.innerHTML = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeBtn.innerHTML = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// حفظ الاختيار حتى بعد تحديث الصفحة
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  themeBtn.innerHTML = '☀️';
}