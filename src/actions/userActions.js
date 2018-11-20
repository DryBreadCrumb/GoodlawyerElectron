import axios from 'axios'

export const setFirstName=(firstName)=>{
	return{
		type:'FIRSTNAME', firstName
	}
}

export const getLawyers = () => {
	return function(dispatch) {
		return axios.get('http://localhost:3001/users/lawyers', {
			params: {
				id: '5bc2632b875b585047eb1877'
			}
		}).then((response) => {
			console.log(response);
			//dispatch(setFirstName(response.data[0].firstName));
		}).catch((e) => {
			console.log(e);
		})
	}
}
