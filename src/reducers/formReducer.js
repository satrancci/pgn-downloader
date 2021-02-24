const formReducer = (values={}, action) => {
    switch (action.type) {
        case 'STORE_FORM_VALUES':
          return action.payload.values;
        default:
          return values;
        
        case 'CLEAR_FORM_VALUES':
          return {}
    }
};

export default formReducer;