import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    // RTK Query API slice
    [api.reducerPath]: api.reducer,
    
    // Feature slices
    auth: authReducer,
    cart: cartReducer,
    ui: uiReducer,
  },
  
  // Add RTK Query middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
    
  // Enable Redux DevTools in development
  devTools: import.meta.env.MODE !== 'production',
});

// Export types for TypeScript (if you decide to use it later)
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch; 