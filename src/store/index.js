import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers/rootReducer';
import eventMiddleware from 'src/middlewares/eventMiddleware';
import addEventMiddleware from 'src/middlewares/addEventMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import filtersMiddleware from 'src/middlewares/filtersMiddleware';
import editEventMiddleware from 'src/middlewares/editEventMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    eventMiddleware,
    addEventMiddleware,
    authMiddleware,
    filtersMiddleware,
    editEventMiddleware,
    // ... d'autres middlewares
  ),
);
const store = createStore(
  reducer,
  enhancers,
);

export default store;
