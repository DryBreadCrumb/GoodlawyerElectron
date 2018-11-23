const defaultState = {
  email: 'parker'
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'EMAIL':
      return {
        email: action.email
      };
    default:
      return defaultState;
  }
};

export default userReducer;
