import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateProps {
  state: boolean;
}

const initialState: InitialStateProps = {
  state: false
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    switchLanguage: (state: any, action: PayloadAction<boolean>) => {
      state.state = action.payload;
    }
  }
});

export const {switchLanguage} = languageSlice.actions;
export default languageSlice.reducer;