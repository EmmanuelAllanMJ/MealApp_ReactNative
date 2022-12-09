// Here we will manage the favorite context
import { createContext, useState } from "react";

// Here we will add the initial values which will help in auto completion
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  // Here we will be having the logic
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currFavIds) => [...currFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currFavIds) =>
      currFavIds.filter((mealId) => mealId !== id)
    );
  }

  // To provide these value to context provider
  // Values are according to the values which we gave in line 5
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  // then pass this to value prop which is expected by the provider

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoriteContextProvider;
