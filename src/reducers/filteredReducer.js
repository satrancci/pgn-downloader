const filteredReducer = (filtered=0, action) => {
    switch (action.type) {
        case 'UPDATE_FILTERED':
          return action.payload.bool;
        default:
          return filtered;
    }
};

export default filteredReducer;