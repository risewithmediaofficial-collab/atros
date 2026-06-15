import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHeaderScrolled: false,
  isMobileMenuOpen: false,
  openNavigationGroup: null,
  activeSection: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setHeaderScrolled(state, action) {
      state.isHeaderScrolled = action.payload;
    },
    setMobileMenuOpen(state, action) {
      state.isMobileMenuOpen = action.payload;
    },
    setOpenNavigationGroup(state, action) {
      state.openNavigationGroup = action.payload;
    },
    setActiveSection(state, action) {
      state.activeSection = action.payload;
    },
    closeNavigationMenus(state) {
      state.isMobileMenuOpen = false;
      state.openNavigationGroup = null;
    },
  },
});

export const {
  closeNavigationMenus,
  setActiveSection,
  setHeaderScrolled,
  setMobileMenuOpen,
  setOpenNavigationGroup,
} = uiSlice.actions;

export default uiSlice.reducer;
