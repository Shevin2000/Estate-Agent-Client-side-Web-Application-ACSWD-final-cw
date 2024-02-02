import React, { createContext, useContext, useReducer } from 'react';

const initialState = { favorites: [] };

const favoriteReducer = (state, action) => {
  switch (action.type)
  // It checks the type property of the action object to determine which operation to perform. 
  { case 'ADD_TO_FAVORITES':
      return { favorites: [...state.favorites, action.payload] };
      // The new state has a favorites property, which is a new array containing all the existing 
      // favorites (state.favorites) and the new item specified in action.payload.
    case 'REMOVE_FROM_FAVORITES':
      return {
        favorites: state.favorites.filter(item => item.id !== action.payload.id),};
        // The new state has a favorites property, which is a new array containing 
        // only the items whose id is not equal to the id specified in action.payload.
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
