# RTK Query Implementation Guide

This guide covers the complete RTK Query setup for your Bitshub application.

## Table of Contents

1. [Overview](#overview)
2. [Setup](#setup)
3. [API Configuration](#api-configuration)
4. [Redux Store](#redux-store)
5. [State Management](#state-management)
6. [Usage Examples](#usage-examples)
7. [Best Practices](#best-practices)
8. [Advanced Features](#advanced-features)

## Overview

RTK Query is a powerful data fetching and caching tool that eliminates the need to write thunks or reducers for data fetching. It provides:

- **Automatic caching** and cache invalidation
- **Request deduplication** and polling
- **Optimistic updates** and error handling
- **TypeScript support** (when using TypeScript)
- **DevTools integration**

## Setup

### 1. Install Dependencies

```bash
npm install @reduxjs/toolkit react-redux
```

### 2. Store Structure

```
src/store/
├── index.js          # Main store configuration
├── api.js            # RTK Query API slice
└── slices/
    ├── authSlice.js  # Authentication state
    ├── cartSlice.js  # Shopping cart state
    └── uiSlice.js    # UI state (modals, loading, etc.)
```

## API Configuration

### Base Query Setup

```javascript
// store/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1',
  prepareHeaders: (headers) => {
    // Get token from localStorage
    const token = localStorage.getItem('authToken');
    
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});
```

### API Slice Configuration

```javascript
export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Product', 'Cart', 'Order', 'User', 'Wishlist', 'Store'],
  
  endpoints: (builder) => ({
    // Your endpoints here
  }),
});
```

## Redux Store

### Store Configuration

```javascript
// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    cart: cartReducer,
    ui: uiReducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
    
  devTools: import.meta.env.MODE !== 'production',
});
```

### Provider Setup

```javascript
// main.jsx
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
```

## State Management

### Authentication Slice

```javascript
// store/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('authToken') || null,
    isAuthenticated: !!localStorage.getItem('authToken'),
    loading: false,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem('authToken', token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('authToken');
    },
  },
});
```

### Cart Slice with Optimistic Updates

```javascript
// store/slices/cartSlice.js
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
    totalAmount: 0,
  },
  reducers: {
    optimisticAddToCart: (state, action) => {
      const { product_id, quantity, price, name, image } = action.payload;
      const existingItem = state.items.find(item => item.product_id === product_id);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id: `temp_${Date.now()}`,
          product_id,
          quantity,
          price,
          name,
          image,
        });
      }
      
      // Recalculate totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
  },
});
```

## Usage Examples

### 1. Basic Query Hook

```javascript
import { useGetProductsQuery } from '../store/api';

const ProductList = () => {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.data?.message}</div>;

  return (
    <div>
      <button onClick={refetch}>Refresh</button>
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
```

### 2. Query with Parameters

```javascript
const ProductList = () => {
  const [filters, setFilters] = useState({ category: 'electronics' });
  
  const { data: products } = useGetProductsQuery(filters, {
    // Skip query if no category selected
    skip: !filters.category,
    // Polling every 30 seconds
    pollingInterval: 30000,
  });

  return (
    <div>
      <select 
        value={filters.category} 
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
      
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
```

### 3. Mutation Hook

```javascript
import { useAddToCartMutation } from '../store/api';
import { useDispatch } from 'react-redux';
import { optimisticAddToCart, revertOptimisticUpdate } from '../store/slices/cartSlice';

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();
  const [addToCart, { isLoading }] = useAddToCartMutation();

  const handleAddToCart = async () => {
    try {
      // Optimistic update
      dispatch(optimisticAddToCart({
        product_id: product.id,
        quantity: 1,
        price: product.amount,
        name: product.name,
        image: product.img_url,
      }));

      // Make API call
      await addToCart({
        product_id: product.id,
        quantity: 1,
      }).unwrap();

    } catch (error) {
      // Revert optimistic update on error
      dispatch(revertOptimisticUpdate({
        product_id: product.id,
        quantity: 1,
      }));
    }
  };

  return (
    <button onClick={handleAddToCart} disabled={isLoading}>
      {isLoading ? 'Adding...' : 'Add to Cart'}
    </button>
  );
};
```

### 4. Conditional Queries

```javascript
import { useGetUserProfileQuery } from '../store/api';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../store/slices/authSlice';

const UserProfile = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  
  const { data: user, isLoading } = useGetUserProfileQuery(undefined, {
    // Skip query if user is not authenticated
    skip: !isAuthenticated,
  });

  if (!isAuthenticated) {
    return <div>Please login to view your profile</div>;
  }

  if (isLoading) return <div>Loading profile...</div>;

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};
```

### 5. Search with Debouncing

```javascript
import { useSearchProductsQuery } from '../store/api';
import { useState, useEffect } from 'react';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  const { data: searchResults, isLoading } = useSearchProductsQuery(debouncedTerm, {
    skip: !debouncedTerm.trim(),
  });

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {isLoading && <div>Searching...</div>}
      
      {searchResults && (
        <div>
          {searchResults.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
```

## Best Practices

### 1. Cache Management

```javascript
// Use tags for cache invalidation
getProducts: builder.query({
  query: (params) => ({ url: '/products', params }),
  providesTags: (result) =>
    result
      ? [
          ...result.map(({ id }) => ({ type: 'Product', id })),
          { type: 'Product', id: 'LIST' },
        ]
      : [{ type: 'Product', id: 'LIST' }],
}),

createProduct: builder.mutation({
  query: (productData) => ({
    url: '/products',
    method: 'POST',
    body: productData,
  }),
  // Invalidate product list cache
  invalidatesTags: [{ type: 'Product', id: 'LIST' }],
}),
```

### 2. Error Handling

```javascript
const ProductList = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (error) {
    return (
      <div>
        <h3>Error loading products</h3>
        <p>{error.data?.message || 'An unexpected error occurred'}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  // Rest of component
};
```

### 3. Loading States

```javascript
const ProductList = () => {
  const { data: products, isLoading, isFetching } = useGetProductsQuery();

  return (
    <div>
      {isLoading && <div>Loading products...</div>}
      {isFetching && !isLoading && <div>Refreshing...</div>}
      
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
```

### 4. Optimistic Updates

```javascript
const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();
  const [addToCart] = useAddToCartMutation();

  const handleAddToCart = async () => {
    // Optimistic update
    dispatch(optimisticAddToCart({
      product_id: product.id,
      quantity: 1,
      price: product.amount,
      name: product.name,
      image: product.img_url,
    }));

    try {
      await addToCart({ product_id: product.id, quantity: 1 }).unwrap();
    } catch (error) {
      // Revert on error
      dispatch(revertOptimisticUpdate({
        product_id: product.id,
        quantity: 1,
      }));
    }
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
};
```

## Advanced Features

### 1. Polling

```javascript
const LiveData = () => {
  const { data } = useGetLiveDataQuery(undefined, {
    // Poll every 5 seconds
    pollingInterval: 5000,
    // Stop polling when tab is not visible
    refetchOnMountOrArgChange: true,
  });

  return <div>{/* Your component */}</div>;
};
```

### 2. Background Updates

```javascript
const ProductList = () => {
  const { data: products, isLoading, isFetching } = useGetProductsQuery(undefined, {
    // Refetch when window regains focus
    refetchOnFocus: true,
    // Refetch when reconnecting
    refetchOnReconnect: true,
  });

  return (
    <div>
      {isFetching && !isLoading && (
        <div style={{ position: 'fixed', top: 0, right: 0, padding: '10px' }}>
          Updating...
        </div>
      )}
      {/* Your component */}
    </div>
  );
};
```

### 3. Custom Base Query

```javascript
const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  
  if (result.error && result.error.status === 401) {
    // Try to get a new token
    const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);
    
    if (refreshResult.data) {
      // Store the new token
      api.dispatch(setToken(refreshResult.data.token));
      
      // Retry the original query
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  
  return result;
};
```

### 4. Transform Response

```javascript
getProducts: builder.query({
  query: (params) => ({ url: '/products', params }),
  transformResponse: (response) => {
    // Transform the response data
    return response.data.map(product => ({
      ...product,
      formattedPrice: `$${product.price.toFixed(2)}`,
      isOnSale: product.discount > 0,
    }));
  },
}),
```

## Environment Configuration

### Environment Variables

```bash
# .env
VITE_API_URL=http://localhost:3000/api/v1
VITE_ENABLE_DEVTOOLS=true
```

### API Configuration

```javascript
// config/api.js
export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  retryAttempts: 3,
  enableDevTools: import.meta.env.VITE_ENABLE_DEVTOOLS === 'true',
};
```

## Testing

### Unit Testing

```javascript
// __tests__/api.test.js
import { api } from '../store/api';
import { setupApiStore } from './test-utils';

describe('API', () => {
  const storeRef = setupApiStore(api);

  test('getProducts returns products', async () => {
    const result = await storeRef.store.dispatch(
      api.endpoints.getProducts.initiate()
    );

    expect(result.data).toBeDefined();
    expect(Array.isArray(result.data)).toBe(true);
  });
});
```

### Integration Testing

```javascript
// __tests__/components/ProductList.test.js
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import ProductList from '../ProductList';

test('renders products', async () => {
  render(
    <Provider store={store}>
      <ProductList />
    </Provider>
  );

  await waitFor(() => {
    expect(screen.getByText('Loading...')).not.toBeInTheDocument();
  });

  expect(screen.getByText('Product Name')).toBeInTheDocument();
});
```

## Conclusion

RTK Query provides a powerful, efficient way to handle API calls in your React application. Key benefits:

1. **Reduced boilerplate** - No need to write thunks or reducers
2. **Automatic caching** - Built-in cache management
3. **Optimistic updates** - Better user experience
4. **Type safety** - Full TypeScript support
5. **DevTools integration** - Easy debugging

This setup gives you a solid foundation for handling all your API calls with RTK Query in your Bitshub application. 