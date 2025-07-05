import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Modal states
  modals: {
    login: false,
    register: false,
    cart: false,
    wishlist: false,
    productQuickView: false,
    checkout: false,
  },
  
  // Notification states
  notifications: [],
  
  // Loading states
  loading: {
    global: false,
    products: false,
    cart: false,
    checkout: false,
  },
  
  // Sidebar states
  sidebar: {
    mobileMenu: false,
    filters: false,
    cart: false,
  },
  
  // Search state
  search: {
    query: '',
    isOpen: false,
    results: [],
    loading: false,
  },
  
  // Theme and layout
  theme: {
    mode: 'light', // 'light' | 'dark'
    sidebarCollapsed: false,
  },
  
  // Toast notifications
  toasts: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // Modal actions
    openModal: (state, action) => {
      const { modalName } = action.payload;
      if (Object.prototype.hasOwnProperty.call(state.modals, modalName)) {
        state.modals[modalName] = true;
      }
    },
    
    closeModal: (state, action) => {
      const { modalName } = action.payload;
      if (Object.prototype.hasOwnProperty.call(state.modals, modalName)) {
        state.modals[modalName] = false;
      }
    },
    
    closeAllModals: (state) => {
      Object.keys(state.modals).forEach(key => {
        state.modals[key] = false;
      });
    },
    
    // Notification actions
    addNotification: (state, action) => {
      const notification = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        ...action.payload,
      };
      state.notifications.unshift(notification);
      
      // Keep only last 10 notifications
      if (state.notifications.length > 10) {
        state.notifications = state.notifications.slice(0, 10);
      }
    },
    
    removeNotification: (state, action) => {
      const { id } = action.payload;
      state.notifications = state.notifications.filter(n => n.id !== id);
    },
    
    clearNotifications: (state) => {
      state.notifications = [];
    },
    
    // Loading actions
    setLoading: (state, action) => {
      const { key, value } = action.payload;
      if (Object.prototype.hasOwnProperty.call(state.loading, key)) {
        state.loading[key] = value;
      }
    },
    
    setGlobalLoading: (state, action) => {
      state.loading.global = action.payload;
    },
    
    // Sidebar actions
    toggleSidebar: (state, action) => {
      const { sidebarName } = action.payload;
      if (Object.prototype.hasOwnProperty.call(state.sidebar, sidebarName)) {
        state.sidebar[sidebarName] = !state.sidebar[sidebarName];
      }
    },
    
    openSidebar: (state, action) => {
      const { sidebarName } = action.payload;
      if (Object.prototype.hasOwnProperty.call(state.sidebar, sidebarName)) {
        state.sidebar[sidebarName] = true;
      }
    },
    
    closeSidebar: (state, action) => {
      const { sidebarName } = action.payload;
      if (Object.prototype.hasOwnProperty.call(state.sidebar, sidebarName)) {
        state.sidebar[sidebarName] = false;
      }
    },
    
    closeAllSidebars: (state) => {
      Object.keys(state.sidebar).forEach(key => {
        state.sidebar[key] = false;
      });
    },
    
    // Search actions
    setSearchQuery: (state, action) => {
      state.search.query = action.payload;
    },
    
    setSearchResults: (state, action) => {
      state.search.results = action.payload;
    },
    
    setSearchLoading: (state, action) => {
      state.search.loading = action.payload;
    },
    
    openSearch: (state) => {
      state.search.isOpen = true;
    },
    
    closeSearch: (state) => {
      state.search.isOpen = false;
      state.search.query = '';
      state.search.results = [];
    },
    
    // Theme actions
    toggleTheme: (state) => {
      state.theme.mode = state.theme.mode === 'light' ? 'dark' : 'light';
    },
    
    setTheme: (state, action) => {
      state.theme.mode = action.payload;
    },
    
    toggleSidebarCollapsed: (state) => {
      state.theme.sidebarCollapsed = !state.theme.sidebarCollapsed;
    },
    
    setSidebarCollapsed: (state, action) => {
      state.theme.sidebarCollapsed = action.payload;
    },
    
    // Toast actions
    addToast: (state, action) => {
      const toast = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        ...action.payload,
      };
      state.toasts.push(toast);
      
      // Auto-remove after 5 seconds
      setTimeout(() => {
        state.toasts = state.toasts.filter(t => t.id !== toast.id);
      }, 5000);
    },
    
    removeToast: (state, action) => {
      const { id } = action.payload;
      state.toasts = state.toasts.filter(t => t.id !== id);
    },
    
    clearToasts: (state) => {
      state.toasts = [];
    },
    
    // Reset UI state
    resetUI: (state) => {
      state.modals = initialState.modals;
      state.notifications = [];
      state.loading = initialState.loading;
      state.sidebar = initialState.sidebar;
      state.search = initialState.search;
      state.toasts = [];
    },
  },
});

export const {
  // Modal actions
  openModal,
  closeModal,
  closeAllModals,
  
  // Notification actions
  addNotification,
  removeNotification,
  clearNotifications,
  
  // Loading actions
  setLoading,
  setGlobalLoading,
  
  // Sidebar actions
  toggleSidebar,
  openSidebar,
  closeSidebar,
  closeAllSidebars,
  
  // Search actions
  setSearchQuery,
  setSearchResults,
  setSearchLoading,
  openSearch,
  closeSearch,
  
  // Theme actions
  toggleTheme,
  setTheme,
  toggleSidebarCollapsed,
  setSidebarCollapsed,
  
  // Toast actions
  addToast,
  removeToast,
  clearToasts,
  
  // Reset action
  resetUI,
} = uiSlice.actions;

// Selectors
export const selectUI = (state) => state.ui;
export const selectModals = (state) => state.ui.modals;
export const selectModal = (state, modalName) => state.ui.modals[modalName];
export const selectNotifications = (state) => state.ui.notifications;
export const selectLoading = (state) => state.ui.loading;
export const selectGlobalLoading = (state) => state.ui.loading.global;
export const selectSidebar = (state) => state.ui.sidebar;
export const selectSidebarState = (state, sidebarName) => state.ui.sidebar[sidebarName];
export const selectSearch = (state) => state.ui.search;
export const selectTheme = (state) => state.ui.theme;
export const selectToasts = (state) => state.ui.toasts;

// Helper selectors
export const selectIsAnyModalOpen = (state) => 
  Object.values(state.ui.modals).some(isOpen => isOpen);

export const selectIsAnySidebarOpen = (state) => 
  Object.values(state.ui.sidebar).some(isOpen => isOpen);

export const selectIsAnyLoading = (state) => 
  Object.values(state.ui.loading).some(isLoading => isLoading);

export default uiSlice.reducer; 