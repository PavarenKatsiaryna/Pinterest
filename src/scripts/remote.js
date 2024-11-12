async function getCards() {
  const response = await fetch(
    "https://65d85342c96fbb24c1bb40ab.mockapi.io/api/pintrest/PinterestClone"
  );

  return await response.json();
}

export { getCards };
