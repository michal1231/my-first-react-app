import shortid from "shortid";
import { strContains } from '../../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchText }, columnId) =>
  cards.filter(card => card.columnId === columnId && strContains(card.title, searchText));
export const getIsFavorite = ({ cards }, cardId) => cards.find(card => card.id === cardId).isFavorite;
export const getFavoriteCards = ({ cards }) => cards.filter(card => card.isFavorite);

//actions
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const DELETE_CARD = createActionName('DELETE_CARD');

//action creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });
export const deleteCard = payload => ({ type: DELETE_CARD, payload });

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    case DELETE_CARD:
      return statePart.filter(card => card.id !== action.payload);
    default:
      return statePart;
  }
};

export default cardsReducer;