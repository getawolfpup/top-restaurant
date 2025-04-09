export default function menuPage() {
  const menupage = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Restaurant Menu Page";

  menupage.append(heading);

  return menupage;
}
