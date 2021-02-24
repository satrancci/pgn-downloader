const fetchedReducer = (fetched=0, action) => {
    switch (action.type) {
        case 'UPDATE_FETCHED':
          return action.payload.bool;
        default:
          return fetched;
    }
};

export default fetchedReducer;