import { createSlice } from '@reduxjs/toolkit';

export interface LayoutState {
  isCollapse: boolean;
}

const initialState: LayoutState = {
  isCollapse: false,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleCollapse: (state) => {
      state.isCollapse = !state.isCollapse;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleCollapse } = layoutSlice.actions;

export default layoutSlice.reducer;
