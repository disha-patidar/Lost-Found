// Example data — you can later fetch this from your backend.
const foundItems = [
  {
    title: "Wrist Watch",
    description: "Found near the college auditorium on May 21.",
    image: "https://via.placeholder.com/250x180?text=Watch"
  },
  {
    title: "ID Card",
    description: "Student ID found at the main gate. Contact security.",
    image: "https://via.placeholder.com/250x180?text=ID+Card"
  },
  {
    title: "Water Bottle",
    description: "Blue steel bottle found in classroom B205.",
    image: "https://via.placeholder.com/250x180?text=Bottle"
  }
];

const container = document.getElementById("found-items-container");

foundItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "item-card";

  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <div class="content">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
  `;

  container.appendChild(card);
});
