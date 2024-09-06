import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'unison',
    storage,
    whitelist: ['auth']
};

const persist = (reducers: any) => persistReducer(persistConfig, reducers);

export default persist;
