const getLocalFavorite = () => {
  let list = localStorage.getItem("favoritesCity");

  if (list) {
    return JSON.parse(localStorage.getItem("favoritesCity"));
  } else {
    return [];
  }
};

export default getLocalFavorite;
