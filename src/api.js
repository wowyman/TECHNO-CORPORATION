export const fetchProducts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=5");
  return response.json();
};
