import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Base query configuration
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3210/v1/dev',
  prepareHeaders: (headers) => {
    // Get token from localStorage
    const token = localStorage.getItem('authToken');
    
    // If we have a token, add it to the headers
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    
    // Set content type
    headers.set('Content-Type', 'application/json');
    
    return headers;
  },
});

// Create the API slice
export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Product', 'Cart', 'Order', 'User', 'Wishlist', 'Store'],
  
  endpoints: (builder) => ({
    // ===== AUTHENTICATION ENDPOINTS =====
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      // Invalidate user data on successful login
      invalidatesTags: ['User'],
    }),
    
    register: builder.mutation({
      query: (userData) => ({
        url: '/auth/',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),
    
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      // Clear all cached data on logout
      invalidatesTags: ['Product', 'Cart', 'Order', 'User', 'Wishlist', 'Store'],
    }),
    
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: { email },
      }),
    }),
    
    resetPassword: builder.mutation({
      query: ({ token, password }) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: { token, password },
      }),
    }),
    
    // ===== PRODUCT ENDPOINTS =====
    getProducts: builder.query({
      query: (params = {}) => ({
        url: '/products',
        params,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Product', id })),
              { type: 'Product', id: 'LIST' },
            ]
          : [{ type: 'Product', id: 'LIST' }],
      // Keep data fresh for 5 minutes
      keepUnusedDataFor: 300,
    }),
    
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{ type: 'Product', id }],
    }),
    
    getProductBySlug: builder.query({
      query: (slug) => ({
        url: '/products',
        params: { slug },
      }),
      providesTags: (result, error, slug) => [{ type: 'Product', id: slug }],
    }),
    
    createProduct: builder.mutation({
      query: (productData) => ({
        url: '/products',
        method: 'POST',
        body: productData,
      }),
      invalidatesTags: [{ type: 'Product', id: 'LIST' }],
    }),
    
    updateProduct: builder.mutation({
      query: ({ id, ...productData }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: productData,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Product', id },
        { type: 'Product', id: 'LIST' },
      ],
    }),
    
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Product', id: 'LIST' }],
    }),
    
    searchProducts: builder.query({
      query: (query) => ({
        url: '/products/search',
        params: { q: query },
      }),
      providesTags: (result, error, query) => [
        { type: 'Product', id: `SEARCH_${query}` },
      ],
    }),
    
    // ===== CART ENDPOINTS =====
    getCart: builder.query({
      query: () => '/cart',
      providesTags: ['Cart'],
    }),
    
    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: '/cart/add',
        method: 'POST',
        body: cartItem,
      }),
      invalidatesTags: ['Cart'],
    }),
    
    updateCartItem: builder.mutation({
      query: ({ itemId, quantity }) => ({
        url: `/cart/items/${itemId}`,
        method: 'PUT',
        body: { quantity },
      }),
      invalidatesTags: ['Cart'],
    }),
    
    removeFromCart: builder.mutation({
      query: (itemId) => ({
        url: `/cart/items/${itemId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
    
    clearCart: builder.mutation({
      query: () => ({
        url: '/cart',
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
    
    // ===== ORDER ENDPOINTS =====
    getOrders: builder.query({
      query: (params = {}) => ({
        url: '/orders',
        params,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Order', id })),
              { type: 'Order', id: 'LIST' },
            ]
          : [{ type: 'Order', id: 'LIST' }],
    }),
    
    getOrder: builder.query({
      query: (id) => `/orders/${id}`,
      providesTags: (result, error, id) => [{ type: 'Order', id }],
    }),
    
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: '/orders',
        method: 'POST',
        body: orderData,
      }),
      invalidatesTags: ['Order', 'Cart'],
    }),
    
    updateOrder: builder.mutation({
      query: ({ id, ...orderData }) => ({
        url: `/orders/${id}`,
        method: 'PUT',
        body: orderData,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Order', id },
        { type: 'Order', id: 'LIST' },
      ],
    }),
    
    cancelOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}/cancel`,
        method: 'PATCH',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Order', id },
        { type: 'Order', id: 'LIST' },
      ],
    }),
    
    // ===== WISHLIST ENDPOINTS =====
    getWishlist: builder.query({
      query: () => '/wishlist',
      providesTags: ['Wishlist'],
    }),
    
    addToWishlist: builder.mutation({
      query: (productId) => ({
        url: '/wishlist',
        method: 'POST',
        body: { product_id: productId },
      }),
      invalidatesTags: ['Wishlist'],
    }),
    
    removeFromWishlist: builder.mutation({
      query: (itemId) => ({
        url: `/wishlist/${itemId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Wishlist'],
    }),
    
    // ===== USER ENDPOINTS =====
    getUserProfile: builder.query({
      query: () => '/user/profile',
      providesTags: ['User'],
    }),
    
    updateUserProfile: builder.mutation({
      query: (userData) => ({
        url: '/user/profile',
        method: 'PUT',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),
    
    // ===== ADDRESS ENDPOINTS =====
    getAddresses: builder.query({
      query: () => '/user/addresses',
      providesTags: ['User'],
    }),
    
    addAddress: builder.mutation({
      query: (addressData) => ({
        url: '/user/addresses',
        method: 'POST',
        body: addressData,
      }),
      invalidatesTags: ['User'],
    }),
    
    updateAddress: builder.mutation({
      query: ({ id, ...addressData }) => ({
        url: `/user/addresses/${id}`,
        method: 'PUT',
        body: addressData,
      }),
      invalidatesTags: ['User'],
    }),
    
    deleteAddress: builder.mutation({
      query: (id) => ({
        url: `/user/addresses/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
    
    // ===== STORE ENDPOINTS =====
    getStores: builder.query({
      query: (params = {}) => ({
        url: '/stores',
        params,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Store', id })),
              { type: 'Store', id: 'LIST' },
            ]
          : [{ type: 'Store', id: 'LIST' }],
    }),
    
    getStore: builder.query({
      query: (id) => `/stores/${id}`,
      providesTags: (result, error, id) => [{ type: 'Store', id }],
    }),
    
    createStore: builder.mutation({
      query: (storeData) => ({
        url: '/stores',
        method: 'POST',
        body: storeData,
      }),
      invalidatesTags: [{ type: 'Store', id: 'LIST' }],
    }),
    
    updateStore: builder.mutation({
      query: ({ id, ...storeData }) => ({
        url: `/stores/${id}`,
        method: 'PUT',
        body: storeData,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Store', id },
        { type: 'Store', id: 'LIST' },
      ],
    }),
    
    deleteStore: builder.mutation({
      query: (id) => ({
        url: `/stores/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Store', id: 'LIST' }],
    }),
  }),
});

// Export auto-generated hooks
export const {
  // Auth hooks
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  
  // Product hooks
  useGetProductsQuery,
  useGetProductQuery,
  useGetProductBySlugQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useSearchProductsQuery,
  
  // Cart hooks
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveFromCartMutation,
  useClearCartMutation,
  
  // Order hooks
  useGetOrdersQuery,
  useGetOrderQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useCancelOrderMutation,
  
  // Wishlist hooks
  useGetWishlistQuery,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
  
  // User hooks
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  
  // Address hooks
  useGetAddressesQuery,
  useAddAddressMutation,
  useUpdateAddressMutation,
  useDeleteAddressMutation,
  
  // Store hooks
  useGetStoresQuery,
  useGetStoreQuery,
  useCreateStoreMutation,
  useUpdateStoreMutation,
  useDeleteStoreMutation,
} = api; 