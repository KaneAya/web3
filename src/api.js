export async function fetchImages(breed) {
  const response = await fetch(
      `https://randomfox.ca\/?i=${breed}.jpg`
  );
  const data = await response.json();
  return data.message;
}
