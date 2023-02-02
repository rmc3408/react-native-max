import { createContext, useState } from 'react';

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoriteContextProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function addingFavorite(id) {
    setFavoriteIds((st) => [...st, id]);
  }

  function removingFavorite(id) {
    setFavoriteIds((st) => st.filter((favId) => favId !== id));
  }

  const valueContext = {
    ids: favoriteIds,
    addFavorite: addingFavorite,
    removeFavorite: removingFavorite,
  };
  return <FavoriteContext.Provider value={valueContext}>{children}</FavoriteContext.Provider>;
}
