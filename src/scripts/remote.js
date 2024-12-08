async function getCards() {
  const response = await fetch(
    "https://67376867aafa2ef22233bb01.mockapi.io/el/Pinterest"
  );

  return await response.json();
}

export { getCards };
