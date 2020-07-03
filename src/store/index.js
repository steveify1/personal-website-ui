import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

// Import all the reducers
import cakeReducer from './cakes/cakeReducer';
import drinkReducer from './drinks/drinkReducer';
import postReducer from './post';
import activeReadReducer from './activeRead';
import searchReducer from './search';

// Middlewares
const middlewares = applyMiddleware(reduxThunk, logger);

// Combine all the reducers
const rootReducer = combineReducers({
  cakes: cakeReducer,
  drinks: drinkReducer,
  posts: postReducer,
  activeRead: activeReadReducer,
  search: searchReducer,
});

// Create and export the redux store
export default createStore(rootReducer, composeWithDevTools(middlewares));
