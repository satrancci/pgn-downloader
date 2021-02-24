const downloadedReducer = (downloaded=0, action) => {
    switch (action.type) {
        case 'UPDATE_DOWNLOADED':
          return action.payload.bool;
        default:
          return downloaded;
    }
};

export default downloadedReducer;