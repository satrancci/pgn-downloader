const formReducer = (values={}, action) => {
    switch (action.type) {
        case 'STORE_FORM_VALUES':
          return action.payload.values;
        default:
          return values;
    }
};

export default formReducer;