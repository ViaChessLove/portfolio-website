import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateProps {
  state: boolean;
}

const initialState: InitialStateProps = {
  state: false
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state: any, action: PayloadAction<boolean>) => {
      state.state = action.payload;
    }
  }
});

export const {switchTheme} = themeSlice.actions;
export default themeSlice.reducer;