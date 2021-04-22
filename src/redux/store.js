import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from './contacts-reducer';
import authreducer from './auth/auth-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(persistConfig, authreducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     auth: authreducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

const persistor = persistStore(store);

//eslint-disable-next-line
export default { store, persistor };
// export default store;
