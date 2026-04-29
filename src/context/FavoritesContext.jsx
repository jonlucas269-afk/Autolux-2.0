import { useState } from "react";
import { FavoritesContext } from "./favorites-context";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(car) {
    if (!car?.id) return;

    setFavorites((prev) => {
      const exists = prev.find((f) => f.id === car.id);

      if (exists) {
        return prev.filter((f) => f.id !== car.id);
      }

      return [...prev, car];
    });
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
