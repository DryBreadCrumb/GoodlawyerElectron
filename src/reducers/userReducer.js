const defaultState = {
	firstName:'parker'
};

const userReducer = (state = defaultState, action) => {
	switch(action.type){
		case 'FIRSTNAME':
			return{
				firstName: action.firstName
			};
		default:
			return defaultState;
	}
};

export default userReducer;
