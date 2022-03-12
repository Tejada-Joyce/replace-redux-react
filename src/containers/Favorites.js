import React from "react";
import FavoriteItem from "../components/Favorites/FavoriteItem";
import { useStore } from "../hooks-store/store";
import "./Products.css";

const Favorites = (props) => {
  const productsList = useStore()[0].products;
  const favoriteProducts = productsList.filter((product) => product.isFavorite);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
