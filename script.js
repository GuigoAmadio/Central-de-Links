function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/WhatsApp Image 2022-05-03 at 16.53.59.png"
    );
  } else {
    img.setAttribute(
      "src",
      "./assets/WhatsApp Image 2023-07-20 at 00.22.51.jpeg"
    );
  }

}
