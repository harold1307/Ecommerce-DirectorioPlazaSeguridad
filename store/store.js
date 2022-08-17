import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';

 const storageConfig = {
        key: 'root', 
        storage:  storageSession,            
 }

const PersistReducer = persistReducer(storageConfig, reducer);
const store = configureStore({
  reducer: PersistReducer,
  //devTools: process.env.NODE_ENV !== 'production',
  devTools: true,
  middleware: [thunk]
})

export const persistor = persistStore(store);
export default store;