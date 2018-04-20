import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectCar} from '../actions/index';

class CarList extends Component {

  showList() {
    return this.props.cars.map((car) => {
      return (
        <li onClick={() => this.props.select(car)} key={car.id}>{car.name}</li>
      );
    });
  }

  render() {
    return <div>
      <ol>
        {this.showList()}
      </ol>
    </div>;
  }

}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

function mapDispatchToProps(dispatch) {
  return {
    /*это функция - колбэк для отправки action на reducer*/
    /*Action => Reducer => Updated Store => Rerender*/
    select: (car) => {dispatch(selectCar(car))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
