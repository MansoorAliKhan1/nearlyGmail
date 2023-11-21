import { createSlice } from '@reduxjs/toolkit';


export const selectoptionsSlice = createSlice({
  name: 'selectoptions',
  initialState: {
    selected: false,
    selectedmail: false,
    showbar: true,
    farbar: false,
    pagename:"/",
  },
  reducers: {
    ticked: (state) => {
      state.selected = true;
    },
    unticked: (state) => {
      state.selected = false;
    },
    tickedmail: (state) => {
        state.selectedmail = true;
      },
    untickedmail: (state) => {
        state.selectedmail = false;
    },
    showbaroptions: (state) => {
        state.showbar = true;
      },
    hidebaroptions: (state) => {
        state.showbar = false;
    },
    farbaroptions: (state) => {
        state.farbar=true;
    },
    setpagename: (state,action) => {
      state.pagename=action.payload;
    },
  },
});

export const { ticked, unticked, tickedmail, untickedmail, showbaroptions, hidebaroptions, farbaroptions, setpagename } = selectoptionsSlice.actions;


export const selectOption = (state) => state.selectoptions.selected;

export const selectSingleOption = (state) => state.selectoptions.selectedmail;

export const selectShowbarOptions = (state) => state.selectoptions.showbar;

export const selectfarbaroptions=(state) => state.selectoptions.farbar;

export const setpageoptions=(state) => state.selectoptions.pagename;

export default selectoptionsSlice.reducer;
