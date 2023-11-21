import { createSlice } from '@reduxjs/toolkit';

const starredSlice = createSlice({
  name: 'starredMail',
  initialState: {
    mails: [],
    isFound: false,
    deletedmails:[],
  },
  reducers: {
    addStarredMail: (state, action) => {
      state.mails.push(action.payload);
    },
    removeStarredMail: (state, action) => {
      state.mails = state.mails.filter(
        (mail) =>
          !mail.name.includes(action.payload.name) ||
          !mail.subject.includes(action.payload.subject) ||
          !mail.message.includes(action.payload.message) ||
          !mail.email.includes(action.payload.email) ||
          !mail.time.includes(action.payload.time)
      );
    },
    findStarredMail: (state, action) => {
        state.isFound = state.mails.some(
          (mail) =>
            mail.name === action.payload.name &&
            mail.subject === action.payload.subject &&
            mail.message === action.payload.message &&
            mail.email === action.payload.email &&
            mail.time === action.payload.time
        );
    },
    setisFound: (state)=> {
        state.isFound=false;
    },
    addDeletedMail: (state, action) => {
        state.deletedmails.push(action.payload);
    },
    removeDeletedMail: (state, action) => {
    state.mails = state.deletedmails.filter(
        (mail) =>
        !mail.name.includes(action.payload.name) ||
        !mail.subject.includes(action.payload.subject) ||
        !mail.message.includes(action.payload.message) ||
        !mail.email.includes(action.payload.email) ||
        !mail.time.includes(action.payload.time)
    );
    },
  },
});

export const { addStarredMail, removeStarredMail, findStarredMail, setisFound, addDeletedMail, removeDeletedMail } = starredSlice.actions;
export const selectStarredMails = (state) => state.starredMail.mails;

export const selectIsFound = (state) => state.starredMail.isFound;

export const showDeletedMails = (state) => state.starredMail.deletedmails;


export default starredSlice.reducer;
