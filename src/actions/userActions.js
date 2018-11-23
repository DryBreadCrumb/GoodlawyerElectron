import axios from 'axios';

export const setEmail=(email)=>{
	return{
		type:'EMAIL', email
	};
};

export const authenticate = (user) => {
	return dispatch => {

		return axios.post('http://localhost:3001/users/login', user)
			.then(function (response) {
				console.log(response);
				return(response.headers['x-auth']);
			})
			.catch((e) => {
				if (e && e.response.status == 400)
				{
					console.log('Bad login');
					return 'invalid';
				}
		});
	};


	// return function(dispatch) {
	// 	return axios.get('http://localhost:3001/users/lawyers', {
	// 		params: {
	// 			id: '5bc55e28ecea26bd9d880beb'
	// 		}
	// 	}).then((response) => {
	// 		console.log(response);
	// 		//dispatch(setFirstName(response.data[0].firstName));
	// 	}).catch((e) => {
	// 		console.log(e);
	// 	});
	// };
};
