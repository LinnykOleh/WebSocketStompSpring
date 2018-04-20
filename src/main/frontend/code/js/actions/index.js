export const selectCar = (car) =>{
  return {
    type: "CAR_SELECTED",
    payload: car
  }
};