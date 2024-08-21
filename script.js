const heading = document.getElementById("myHeading");
const text = heading.textContent;
const newText = text.replace(/\./g, '<span class="purple-dot">.</span>')
heading.innerHTML = newText;

