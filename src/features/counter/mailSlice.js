import {createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
    selectedMessage: null,
    expand: false,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    openMessage: (state,action) => {
      state.selectedMessage = action.payload;
    },
    openexpand: (state) => {
      state.expand=true;
    },
    closeexpand: (state) => {
      state.expand=false;
    }
  },
});

export const { openSendMessage, closeSendMessage, openMessage, openexpand, closeexpand } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const selectedMail = (state) => state.mail.selectedMessage;

export const selectexpanded= (state) => state.mail.expand;


export default mailSlice.reducer;
