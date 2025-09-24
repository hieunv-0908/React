import { createSlice } from '@reduxjs/toolkit';

const viewSlice = createSlice({
  name: 'view',
  initialState: { mode: 'list' },
  reducers: {
    toggleView: (state) => {
      state.mode = state.mode === 'list' ? 'grid' : 'list';
    }
  }
});

export const { toggleView } = viewSlice.actions;
export default viewSlice.reducer;