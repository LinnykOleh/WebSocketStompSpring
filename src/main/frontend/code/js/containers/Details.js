import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component{

  render() {
    if (!this.props.car) {
      return null
    }
    return <div>
      <h2>{this.props.car.name}</h2>
      <p>{this.props.car.desc}</p>
      <p>Speed: {this.props.car.speed}, Weight: {this.props.car.weight}</p>
      <img src={this.props.car.img}/> <br/>
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    car: state.carActive
  };
}

export default connect(mapStateToProps)(Details)