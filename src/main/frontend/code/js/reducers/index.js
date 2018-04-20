import {combineReducers} from 'redux';
import CardReducers from './car';
import CarActive from './car-active';

const allReducers = combineReducers({
  cars: CardReducers,
  carActive: CarActive
});

export default allReducers;