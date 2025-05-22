// Example data (this can be replaced with dynamic data from backend/API)
const lostItems = [
  {
    title: "Black Wallet",
    description: "Lost near the cafeteria on May 20. Contains ID and cards.",
    image: "https://via.placeholder.com/250x180?text=Wallet"
  },
  {
    title: "Blue Backpack",
    description: "Lost in the library. Contains books and a laptop.",
    image: "https://via.placeholder.com/250x180?text=Backpack"
  },
  {
    title: "Smartphone",
    description: "Samsung Galaxy S21 lost in the parking lot.",
    image: "https://via.placeholder.com/250x180?text=Phone"
  }
];

const container = document.getElementById("items-container");

lostItems.forEach(item => {
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
