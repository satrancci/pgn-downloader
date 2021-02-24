const submittedReducer = (submitted=0, action) => {
    switch (action.type) {
        case 'UPDATE_SUBMITTED':
          return action.payload.bool;
        default:
          return submitted;
    }
};

export default submittedReducer;