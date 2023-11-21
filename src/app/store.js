import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/counter/mailSlice';
import userReducer from '../features/counter/useSlice';
import selectoptionsReducer from '../features/counter/selectoptionsSlice';
import starredMailReducer from '../features/counter/starredSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
    selectoptions: selectoptionsReducer,
    starredMail: starredMailReducer
  },
});
