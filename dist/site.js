/* Living With Hope */
(function () {
  var IMAGE_BASE = "assets/";

  /* 2. If an uploaded filename differs from the original, remap it here. */
  var RENAMED = {
    // "flyer.png": "living-with-hope-flyer.png"
  };

  var root = document.getElementById("lwh");
  if (!root) return;

  root.querySelectorAll("[data-lwh-img]").forEach(function (img) {
    var f = img.getAttribute("data-lwh-img");
    img.src = IMAGE_BASE + (RENAMED[f] || f);
  });

  /* Smooth in-page scrolling that clears the sticky navigation. */
  root.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var target = document.getElementById(a.getAttribute("href").slice(1));
      if (!target) return;
      e.preventDefault();
      var header = root.querySelector(".site-header");
      var offset = header ? header.offsetHeight + 12 : 0;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: "smooth"
      });
    });
  });
})();
