function smoothScroll(){
    document.querySelector('.your_class or #id here').scrollIntoView({
        behavior: 'smooth'
    });
}

const btn = document.querySelector(".btn-toggle");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
	$('html').addClass('dark-theme');
	document.getElementById("checkbox").checked = true;

}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
  location.reload();
});
