//actions
const createActionName = actionName => `app/searchText/${actionName}`;
const UPDATE_SEARCH_TEXT = createActionName('UPDATE_SEARCH_TEXT');

//action creators
export const updateSearchText = payload => ({ type: UPDATE_SEARCH_TEXT, payload });

const searchTextReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT:
      return action.payload
    default:
      return statePart;
  }
};

export default searchTextReducer;