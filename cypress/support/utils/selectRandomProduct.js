export default function selectRandomProduct() {
  const products = [
    "Premium Leather Watch",
    "Wireless Headphones",
    "Classic White Sneakers",
  ];
  const randomIndex = Math.floor(Math.random() * products.length);
  return products[randomIndex];
}
