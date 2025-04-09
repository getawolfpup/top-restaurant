export default function pageLoader(page) {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  content.append(page);
}
