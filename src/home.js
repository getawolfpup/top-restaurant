export default function homepage() {
  const homepage = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Restaurant Homepage";

  homepage.append(heading);

  return homepage;
}
