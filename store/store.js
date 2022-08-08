import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

 const storageConfig = {
        key: 'root', 
        storage:  storageSession,            
 }

const myPersistReducer = persistReducer(storageConfig, reducer);
const store = configureStore({
  reducer: myPersistReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store);
export default store;