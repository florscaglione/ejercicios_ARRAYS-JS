var parking_state = [
  [1, 1, 1],
  [0, 0, 0],
  [1, 1, 2]
]

function getParkingLotState(parking_state) {
  const state = { 
    totalSlots: 0, 
    availableSlots: 0, 
    occupiedSlots: 0 
  };

  for (let i = 0; i < parking_state.length; i++) {
    //console.log(parking_state[i]);
    for (let j = 0; j < parking_state[i].length; j++) {
      //console.log(parking_state[i][j]);
      if (parking_state[i][j] === 1) {
        state.totalSlots++;
        state.occupiedSlots++;
      } else if (parking_state[i][j] === 2) {
        state.totalSlots++;
        state.availableSlots++;
      }
    }
  }
  return state;

}

console.log(getParkingLotState(parking_state));
