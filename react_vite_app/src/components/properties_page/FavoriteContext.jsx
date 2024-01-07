import React, { createContext, useContext, useReducer } from 'react';

const initialState = { favorites: [] };

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return { favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FROM_FAVORITES':
      return {
        favorites: state.favorites.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  return (
    <FavoriteContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error('useFavorite must be used within a FavoriteProvider');
  }
  return context;
};
