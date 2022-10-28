import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './subreducers/listsReducer';
import columnsReducer from './subreducers/columnsReducer';
import cardsReducer from './subreducers/cardsReducer';
import searchTextReducer from './subreducers/searchTextReducer';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchText: searchTextReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

